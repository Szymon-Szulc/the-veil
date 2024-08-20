from flask import Flask, render_template
from flask_socketio import SocketIO, emit, join_room, leave_room, send
from flask_cors import CORS

sock = Flask(__name__)
sock.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(sock, cors_allowed_origins="*")
CORS(sock)

@socketio.on('connect')
def test_connect():
    emit('my response', {'data': 'Connected to server!'})

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

@socketio.on("con")
def test_con(data):
    print(data["data"])

@socketio.on('join')
def on_join(data):
    username = data['user']
    room = data['room']
    join_room(room)
    emit("success", "test")
    emit("foo", {"msg":username + ' has entered the room.'}, to=room)

@socketio.on('leave')
def on_leave(data):
    print(data)
    username = data['user']
    room = data['room']
    emit("foo", {"msg": username + ' has left the room.'}, to=room)
    leave_room(room)

@socketio.on("create-something")
def get_mess(data):
    print("Dostałem wiadomość: " + data["message"])
    emit("foo", {"msg":"{}: {}".format(data["login"], data["message"]), "login":data["login"]} , to=data["room"])

@sock.route("/")
def con():
    return render_template("login.html")
