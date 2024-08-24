from flask import Blueprint
from flask_restful import Api

my_blueprint = Blueprint('login', __name__)
api = Api(my_blueprint)

from .login import Login

api.add_resource(Login, "/login")