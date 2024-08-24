# ALPHA
import threading
from rest import rest
from sock import sock

p=6001
h="0.0.0.0"

def run_api():
    rest.run(host=h, port=p)

def run_socker():
    sock.run(host=h, port=p+1)

if __name__ == "__main__":
    api = threading.Thread(target=run_api)
    webs = threading.Thread(target=run_socker)
    api.daemon = False
    api.start()
    
    webs.daemon = False
    webs.start()