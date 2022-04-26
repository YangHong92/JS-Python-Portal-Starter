from fastapi import FastAPI, Depends
from pydantic import BaseModel

from .analyzer import Analyzer, get_analyzer

app = FastAPI()

class ModelRequest(BaseModel):
    text:str

class ModelResponse(BaseModel):
    result: list
    

@app.post('/foo', response_model = ModelResponse)
def predict(request: ModelRequest, model: Analyzer = Depends(get_analyzer)): #dependence injection
    result = model.foo(request.text)
    return ModelResponse(
        result = result
    )