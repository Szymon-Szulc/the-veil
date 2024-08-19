# ALPHA
import threading
from rest import rest
from sock import sock

p=6000
h="127.0.0.1"

def run_api():
    rest.run(host=h, port=p)

def run_socker():
    sock.run(host=h, port=p+1)

if __name__ == "__main__":
    api = threading.Thread(target=run_api)
    api.daemon = False
    api.start()
    webs = threading.Thread(target=run_socker)
    webs.daemon = False
    webs.start()