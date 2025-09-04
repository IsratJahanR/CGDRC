from fastapi import FastAPI
from backend.model import Service

app = FastAPI()




@app.get("/")
def greet():
    return "Welcome to Child Growth & Development Research Centre!"


service = [
    Service(name = "Therapy Session", description = "A session for child therapy",price = 100.0, available = True),
    Service(name = "Nutritional Consultation", description = "Consultation on child nutrition",price = 80.0, available = True),
    Service(name = "Developmental Assessment", description = "Assessment of child development",price =  150.0, available = False)   
]
@app.get("/services")
def services():
    return service