
'''
    Functions for transforming API data into
    proper formates for Nivo visuals
'''

import pandas as pd
import sys



def TRANSFORM_treemap(data: dict) -> dict:
    ret = {"HELLO": "", "children":[]}

    for i in data.keys():
        child = {}
        child["name"] = i
        child["loc"] =  int(data[i])
        ret["children"].append(child)
    
    return ret


def TRANSFORM_donut(data: dict) -> list:
        ret = []
        for i in data.keys():
            child = {}
            child["id"] = i
            child["label"] = i
            child["value"] =  int(data[i])
            ret.append(child)
        return ret
        




def TRANSFORM_line(data: pd.DataFrame, xName: str, yName: str) -> dict:
    ret = []
    print(data.columns, file=sys.stderr)
    x_col = data[xName].to_list()
    y_col = data[yName].to_list()
    for i in range(len(x_col)):
        ret.append({"x": x_col[i], "y": y_col[i]})

    return ret


