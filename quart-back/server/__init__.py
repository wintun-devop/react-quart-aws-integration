#to creat app instance
from quart import Quart
#cors setting
from quart_cors import cors
#authentication and authorization for jwt
from quart_jwt_extended import JWTManager
from datetime import timedelta
#bcrypt for password hashing
from quart_bcrypt import Bcrypt
#server configuration
from . import server_config


#declare bcrypt global instance
bcrypt = Bcrypt()

def create_app():
    app = Quart(__name__)
    app.config['SECRET_KEY']=server_config.APP_SECRET_KEY
    #configure cors
    app = cors(app, allow_origin="*")
    #configure jwt
    app.config['JWT_SECRET_KEY'] = server_config.JWT_SECRET_KEY
    app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=10)  # Adjust as needed
    app.config['JWT_REFRESH_TOKEN_EXPIRES'] = timedelta(days=10)  # Adjust as needed
    app.config['JWT_REFRESH_TOKEN_ENABLED'] = True
    JWTManager(app)
    #database config
    #bcrypt hasing
    bcrypt.init_app(app)
    return app
