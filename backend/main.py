from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import models
from models import Advisor, SessionLocal
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, HttpUrl
from typing import Annotated, Optional

app = FastAPI()

origins = [
    "http://localhost:3000",
   
    ]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Pydantic schema
class AdvisorCreate(BaseModel):
    name: str
    designation: str
    department: Optional[str] = None
    education: Optional[str] = None
    research_focus: Optional[str] = None
    research_interests: Optional[str] = None
    profile_link: Optional[HttpUrl] = None

class AdvisorModel(AdvisorCreate):
    id: int

    class Config:
        orm_mode = True

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

db_dependency = Annotated[Session, Depends(get_db)] 
models.Base.metadata.create_all(bind=SessionLocal().bind)

@app.get("/advisors/")
def get_advisors(db: db_dependency):
    return db.query(Advisor).all()

@app.post("/advisors/",response_model=AdvisorModel)
def add_advisor(advisor: AdvisorCreate, db: db_dependency):
    db_advisor = Advisor(**advisor.dict())
    db.add(db_advisor)
    db.commit()
    db.refresh(db_advisor)
    return db_advisor

@app.put("/advisors/{advisor_id}")
def update_advisor(advisor_id: int, advisor: AdvisorCreate, db: Session = Depends(get_db)):
    db_advisor = db.query(Advisor).filter(Advisor.id == advisor_id).first()
    if not db_advisor:
        raise HTTPException(status_code=404, detail="Advisor not found")
    for key, value in advisor.dict().items():
        setattr(db_advisor, key, value)
    db.commit()
    db.refresh(db_advisor)
    return db_advisor

@app.delete("/advisors/{advisor_id}")
def delete_advisor(advisor_id: int, db: Session = Depends(get_db)):
    db_advisor = db.query(Advisor).filter(Advisor.id == advisor_id).first()
    if not db_advisor:
        raise HTTPException(status_code=404, detail="Advisor not found")
    db.delete(db_advisor)
    db.commit()
    return {"message": "Advisor deleted"}

@app.get("/")
def index():
    return {"message": "Welcome to the Advisors API"}
