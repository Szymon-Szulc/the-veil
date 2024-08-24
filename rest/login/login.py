from flask_restful import Resource
from flask import request


class Login(Resource):
    def get(self):
        print("test")
        args = request.args
        print(args)
        print(args)
        return {"data": 'zalogowano jako {}'.format(args["email"])}

