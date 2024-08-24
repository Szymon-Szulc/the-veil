from flask_restful import Resource
from flask import request
from ..Data import Mongo
from ..Auth import Auth
import datetime

class Login(Resource):
    def get(self):
        args = request.args
        login = Auth.valid_password(args["password"], args["email"])
        if login == True:
            user = Mongo.get("users", {"personal.email": args["email"]})
            # return {"nick": user["data"]["nick"]}
            jwt = Auth.code_jwt(str(user["uid"]))
            return {"login": True}, 200, {'Set-Cookie': 'token='+jwt + "; Max-age=10"}
        # 1209600
        else:
            return {"login": False},401
        return {"login": False},401

