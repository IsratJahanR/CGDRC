from database import Base
from sqlalchemy import Column, Integer, String, Text


class Advisor(Base):
    __tablename__ = "advisors"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(200), nullable=False)
    designation = Column(String(200), nullable=True)
    department = Column(String(255), nullable=True)
    education = Column(Text, nullable=True)
    research_focus = Column(Text, nullable=True)
    research_interests = Column(Text, nullable=True)
    profile_link = Column(String(500), nullable=True)
