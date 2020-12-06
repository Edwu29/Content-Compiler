from django.apps import AppConfig
import pymongo
from pymongo import MongoClient

class AppConfig(AppConfig):
    name = 'app'



cluster = MongoClient("mongodb+srv://edwu29:mongo123@opes.grfrk.mongodb.net/Test?retryWrites=true&w=majority")

db = cluster["Test"]
collection=db["test"]

post= { "name": "ryan", "score": 1}
post1= { "name": "donny", "score": 2}
post2= { "name": "vivian", "score": 3}
collection.insert_one(post)

collection.insert_many([post1, post2])