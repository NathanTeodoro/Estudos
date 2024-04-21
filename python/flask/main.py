from flask import Flask
app = Flask(__name__)
#
#@app.route('/')
#def hello():
#    return "<h1> Hello , World!</h1>"
#
#
from markupsafe import escape

@app.route("/<name>")
def hello(name):
    return f"hello, {escape(name)}!"