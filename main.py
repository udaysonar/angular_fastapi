from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import MySQLdb
import MySQLdb.cursors
import json

app = FastAPI()

conn=MySQLdb.connect(
    host="localhost",
    user="root",
    password="root",
    database="bhakt_niwas_management",
    cursorclass=MySQLdb.cursors.DictCursor
    )

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
def read_root():
    return {"message": "Hello World"}

@app.get("/get_guests")
def get_guests():
    curs=conn.cursor()
    curs.execute("select * from guests")
    records=curs.fetchall()
    return records

@app.post("/add_guest")
def add_guest(name: str = Form(...), age: int = Form(...), gender: str = Form(...), contact: str = Form(...),email: str = Form(...), check_in: str = Form(...), check_out: str = Form(...) ):
    curs=conn.cursor()
    curs.execute("insert into guests(name, age,gender,contact_number,email,check_in_date,check_out_date) values(%s,%s,%s,%s,%s,%s,%s)",(name,age,gender,contact,email,check_in,check_out))
    conn.commit()
    return {"message":"Guest added successfully"}
