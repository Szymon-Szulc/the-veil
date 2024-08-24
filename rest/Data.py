import os

from dotenv import load_dotenv
from pymongo import MongoClient

if os.getenv("env_file") == "1":
    load_dotenv(os.path.join(os.path.dirname(__file__), '../.env'))
client = MongoClient(os.environ.get('DATABASE_LINK'))
db = client["the-veil"]


class Mongo:
    @staticmethod
    def get(collection: str, conditions: object, sort_con={}):
        try:
            return db[collection].find_one(filter=conditions, sort=sort_con)
        except TypeError:
            return None

    @staticmethod
    def get_many(collection: str, conditions: object, sort_con={}):
        try:
            return db[collection].find(filter=conditions, sort=sort_con)
        except TypeError:
            return None

    @staticmethod
    def save_obj(collection: str, obj: object):
        result = db[collection].insert_one(obj)
        return result.inserted_id

    @staticmethod
    def delete(collection: str, conditions: object):
        db[collection].delete_one(conditions)

    @staticmethod
    def update(collection: str, conditions: object, setter: object):
        db[collection].update_one(conditions, setter)

    @staticmethod
    def delete_many(collection: str, conditions: object):
        db[collection].delete_many(conditions)

