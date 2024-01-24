from quart import jsonify,make_response,Blueprint,request

#import api prefix
from server.server_config import AUTH_API_LINK
#import bcrypt
from server import bcrypt
#import db session for operation
from server.models.db import db_session
from server.models import User
from sqlalchemy.exc import SQLAlchemyError

#declare blue print
register_bp = Blueprint('register',__name__,url_prefix=AUTH_API_LINK)

@register_bp.route("/register",methods=['POST'])
async def create_user():
     req_body = await request.get_json()
     try:
        user_name=req_body["user_name"]
        user_email=req_body["user_email"]
        user_password=req_body["user_password"]
        #hasing passsword
        hash_password = bcrypt.generate_password_hash(user_password).decode('utf-8')
        print("hash password",hash_password)
        add_user = User(email=user_email,password=hash_password,username=user_name)
        db_session.add(add_user)
        db_session.commit()
        result = db_session.query(User).filter_by(email=user_email).first()
        response = {
            "id":str(result.id),
            "user_name":user_name,
            "user_email":user_email
        }
        return await make_response(jsonify(response),201)
     except SQLAlchemyError as e:
        #print(e)
        error={"status":"fail","message":"internal server error"}
        raise e
         