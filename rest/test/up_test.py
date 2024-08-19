from flask_restful import Resource

class Test(Resource):
    def get(self):
        return {"up": True}, 201

class Test_a(Resource):
    def get(self):
        return {"up": False}, 200