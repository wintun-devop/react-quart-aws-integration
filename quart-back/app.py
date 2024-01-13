from server import create_app


#import blue print
from server.routes.server_test import servertest_bp
from server.routes.user.register import register_bp
from server.routes.user.auth import auth_bp
#create instance
app = create_app()

#register blue print
app.register_blueprint(servertest_bp)
app.register_blueprint(register_bp)
app.register_blueprint(auth_bp)

if __name__ == "__main__":
    app.run()





