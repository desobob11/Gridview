
import pandas as pd


''' This is an inplace transformation '''
def clean_dates(data: dict, interval: str):
    df = pd.DataFrame(data)
    if interval == "h":
        df["begin_datetime_utc"] = pd.to_datetime(df["begin_datetime_utc"]).dt.hour
        df["begin_datetime_mpt"] = pd.to_datetime(df["begin_datetime_mpt"]).dt.hour
    
    return df.to_dict()

