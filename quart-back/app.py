from server import create_app


#import blue print
from server.routes.server_test import servertest_bp

#create instance
app = create_app()

#register blue print
app.register_blueprint(servertest_bp)

if __name__ == "__main__":
    app.run()





