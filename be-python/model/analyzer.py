import pandas as pd
import os
import json

class Analyzer:
    def __init__(self):
        # the root directory is be-python
        # print(os. getcwd()) 
        # fillna with '' so it will not raise error in data validation
        df = pd.read_csv('model/data/data_sample.csv').fillna('')
        
        # convert df into list for pydantic ModelResponse validation
        self.data = json.loads(df.to_json(orient='records')) 

    def foo(self, text):
        return (
            self.data
        )


analyzer = Analyzer()

# return the single instance
def get_analyzer():
    return analyzer