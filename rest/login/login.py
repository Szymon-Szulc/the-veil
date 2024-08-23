from flask_restful import Resource, reqparse



class Login(Resource):
    def post(self):
        print("test")
        parser = reqparse.RequestParser()
        parser.add_argument('email', required=True, help="Email cannot be blank!")
        parser.add_argument('password', required=True, help="password cannot be blank!")
        args = parser.parse_args()
        print(args)
        return {"data": 'zalogowano jako {}'.format(args["email"])}

