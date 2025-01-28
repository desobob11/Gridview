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


'''
    Start flask app, allow CORS
'''
#app = Flask(__name__)
#cors = CORS(app)
#app.config['CORS_HEADERS'] = 'Content-Type'




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



def currentSupplyDemand():
        headers_ = { "Content-Type": "application/json",  "API-Key": API_KEY}
    
        url_ = f"https://apimgw.aeso.ca/public/currentsupplydemand-api/v1/csd/summary/current"
        result = requests.get(url=url_, headers=headers_)
        cont = result.content

        data = json.loads(cont.decode("utf-8"))["return"]
        for i in data["generation_data_list"]:
             i["fuel_type"] = i["fuel_type"].title()
        data = json.dumps(data)
        return data





def main():
    print(currentSupplyDemand())



if __name__ == '__main__':
    main()