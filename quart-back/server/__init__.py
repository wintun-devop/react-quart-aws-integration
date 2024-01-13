#to creat app instance
from quart import Quart
#cors setting
from quart_cors import cors

#server configuration
from . import server_config

def create_app():
    app = Quart(__name__)
    app.config['SECRET_KEY']=server_config.APP_SECRET_KEY
    #configure cors
    app = cors(app, allow_origin="*")
    return app
