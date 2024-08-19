import os
import threading

from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from flask_restful import Api

rest = Flask(__name__)
api = Api(rest)
CORS(rest)

from .test import my_blueprint as test_bp

rest.register_blueprint(test_bp)

