import os
from bson import ObjectId
import argon2
import jwt
from dotenv import load_dotenv
from pymongo import MongoClient
from cryptography.fernet import Fernet

if os.getenv("env_file") == "1":
    load_dotenv(os.path.join(os.path.dirname(__file__), '../.env'))
key = os.environ.get('JWT_TOKEN')
hash_key = os.environ.get('HASH_KEY')
client = MongoClient(os.environ.get('DATABASE_LINK'))
db = client['the-veil']
ph = argon2.PasswordHasher()

class Auth:

    @staticmethod
    def decode_jwt(hashed):
        f = Fernet(hash_key)
        token = f.decrypt(hashed)
        headers = jwt.get_unverified_header(token)
        try:
            decode = jwt.decode(token, key, headers['alg'])["uid"]
            print(decode)
            user = db.users.find_one({"uid": decode})
            return user
        except (jwt.InvalidSignatureError, jwt.exceptions.DecodeError) as e:
            print("error jwt: ", e)
            return False

    @staticmethod
    def code_jwt(user_id):
        print(user_id)
        print(key)
        payload = {"uid": str(user_id)}
        token_jwt = jwt.encode(payload, key)
        print(token_jwt)
        f = Fernet(hash_key)
        new_hash = f.encrypt(token_jwt.encode())
        return new_hash.decode()

    @staticmethod
    def valid_password(password, email):
        try:
            hashed = db.users.find_one({"personal.email": email})['data']['password']
        except (TypeError):
            hashed = None
        if not hashed:
            ph.hash(password)
            return False
        try:
            if ph.verify(hashed, password):
                if ph.check_needs_rehash(hashed):
                    new_hashed = ph.hash(password)
                    db.users.update_one({"personal.email": email}, {"$set": {"data.password": new_hashed}})
                return True
        except (argon2.exceptions.VerifyMismatchError, AttributeError) as e:
            print(e)
            return False

    @staticmethod
    def hash_password(password):
        return ph.hash(password)