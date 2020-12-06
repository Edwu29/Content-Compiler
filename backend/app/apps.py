from django.apps import AppConfig
import pymongo
from pymongo import MongoClient
import os
from dotenv import load_dotenv

class AppConfig(AppConfig):
    name = 'app'


load_dotenv()
test = os.environ.get("mongo")
cluster = MongoClient(test)

db = cluster["Test"]
collection=db["test"]

post= { "name": "ryan", "score": 1}
post1= { "name": "donny", "score": 2}
post2= { "name": "vivian", "score": 3}
collection.insert_one(post)

collection.insert_many([post1, post2])