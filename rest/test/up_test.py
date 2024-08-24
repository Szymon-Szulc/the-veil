from flask_restful import Resource
from ..Data import Mongo
from flask import request
from ..Auth import Auth
from ..common import get_api_key

class Test(Resource):
    def get(self):
        if(request.cookies.get("token") == None):
            return {"error": "Bad token"}, 401
        user = Auth.decode_jwt(request.cookies["token"])

        return {"nick": user["data"]["nick"]}, 201

class Test_a(Resource):
    def get(self):
        return {"up": False}, 200
    
class Test_db(Resource):
    def get(self):
        user = Mongo.get("users", {"uid": "123"})
        print(user)
        return {"uid": user["uid"], "nick":user["data"]["nick"]}
    
class Test_password_hash(Resource):
    def get(self):
        args = request.args
        if (args["key"] == get_api_key()):
            p_hash = Auth.hash_password(args["password"])
            return {"password": p_hash}
        else:
            return {"error": "wrong api key"}, 401


        # from flask_restful import Resource
# from flask import request


# class Login(Resource):
#     def get(self):
#         print("test")
#         args = request.args
#         print(args)
#         print(args)
#         return {"data": 'zalogowano jako {}'.format(args["email"])}
