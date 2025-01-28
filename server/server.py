from flask import Flask
from flask import request
import flask
import requests
import json
import pandas as pd
import sys
import os
from flask_cors import CORS, cross_origin
from utilities import *
from figureTransforms import *

'''
    Connection vars
'''
IP = '127.0.0.1'
PORT = 8080


'''
    Get API key from environment variables
'''
API_KEY = os.environ["AESO_PRIM_KEY"]
API_OLD_KEY = os.environ["AESO_OLD_KEY"]

'''
    Start flask app, allow CORS
'''
app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'




'''
    Route for getting pool price for a start and end date
'''
@app.route("/poolPrice/", methods=["GET"])
@cross_origin()
def RESP_poolPrice():
    args = request.args
    startDate = args["startDate"]
    endDate = args["endDate"]
    data = poolPrice(startDate, endDate)
    resp =  flask.jsonify({"data" : TRANSFORM_line(pd.DataFrame(data), "begin_datetime_mpt", "pool_price")})
    return resp



'''
    API call for pool price, helper for above function
'''
def poolPrice(startDate, endDate):
    headers_ = { "Content-Type": "application/json",  "API-Key": API_KEY}
    
    url_ = f"https://apimgw.aeso.ca/public/poolprice-api/v1.1/price/poolPrice?startDate={startDate}&endDate={endDate}"
    result = requests.get(url=url_, headers=headers_)
    cont = result.content
    data = json.loads(cont.decode('utf-8'))["return"]["Pool Price Report"]
    data = clean_dates(data, "h")
    return data

'''
    Route for getting asset list
'''

@app.route("/assetList/", methods=["GET"])
@cross_origin()
def RESP_assetList():
    resp = assetList()
    return resp

'''
    API call for asset list, helper for above function
'''
def assetList():
    headers_ = { "Content-Type": "application/json",  "API-Key": API_KEY}

    url_ = f"https://apimgw.aeso.ca/public/assetlist-api/v1/assetlist"
    result = requests.get(url=url_, headers=headers_)
    cont = result.content
    data = json.loads(cont.decode('utf-8'))["return"]
    data = add_index(data)
    return data




'''
    Route for getting current generation according to fuel type
'''
@app.route("/current_gen_by_fuel/", methods=["GET"])
@cross_origin()
def RES_current_gen_by_fuel():
    data = currentGenByFuel()
    resp =  flask.jsonify({"data" : TRANSFORM_donut(data)})
    return resp

'''
    API call for current generation by fuel type, helper for above function
'''
def currentGenByFuel():     # old API
    headers_ = { "Content-Type": "application/json",  "X-API-Key": API_OLD_KEY} 
    
    url_ = f"https://api.aeso.ca/report/v1/csd/generation/assets/current"
    result = requests.get(url=url_, headers=headers_)
    cont = result.content
    data = json.loads(cont.decode('utf-8'))["return"]["asset_list"]
    df = pd.DataFrame(data)
    df = df.groupby(["fuel_type"])["net_generation"].sum(numeric_only=True)
    return df.to_dict()









if __name__ == '__main__':
    app.run(debug=True, port=PORT)