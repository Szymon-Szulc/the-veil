from flask import Blueprint
from flask_restful import Api

my_blueprint = Blueprint('test', __name__)
api = Api(my_blueprint)

from .up_test import Test, Test_a

api.add_resource(Test, "/up")
api.add_resource(Test_a, "/down")