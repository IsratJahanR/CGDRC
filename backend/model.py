from pydantic import BaseModel

class Service(BaseModel):
    name: str
    description: str
    price: float
    available: bool
        
    def get_info(self):
        return f"Service: {self.name}, Description: {self.description}, Price: ${self.price}, Available: {self.available}"