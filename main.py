# ALPHA

from flask import Flask
from flask_restful import Resource, Api
app = Flask(__name__)
api = Api(app)

class Hello(Resource):
    def get(self):
        return {'hello': 'world'}
api.add_resource(Hello, "/")

app.run(host="127.0.0.1")