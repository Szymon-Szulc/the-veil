from flask_restful import Resource, reqparse



class Login(Resource):
    def post(self):
        print("test")
        parser = reqparse.RequestParser()
        parser.add_argument('login', required=True, help="Email cannot be blank!")
        parser.add_argument('room', required=True, help="Room cannot be blank!")
        args = parser.parse_args()
        print(args)
        return {"data": 'zalogowano jako {}, dołączono do pokoju {}'.format(args["login"], args["room"])}

