from flask import Flask, render_template
from flask_socketio import SocketIO, emit


sock = Flask(__name__)
sock.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(sock)

@socketio.on('connect')
def test_connect():
    emit('my response', {'data': 'Connected to server!'})

@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected')

@socketio.on("con")
def test_con(data):
    print(data["data"])

@sock.route("/")
def con():
    return render_template("index.html")
