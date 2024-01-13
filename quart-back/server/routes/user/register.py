from quart import jsonify,make_response,Blueprint,request

#import api prefix
from server.server_config import AUTH_API_LINK
#import bcrypt
from server import bcrypt
#declare blue print
register_bp = Blueprint('register',__name__,url_prefix=AUTH_API_LINK)

@register_bp.route("/register",methods=['POST'])
async def create_user():
     req_body = await request.get_json()
     try:
        user_name=req_body["user_name"]
        user_email=req_body["user_email"]
        user_password=req_body["user_password"]
        hash_password = bcrypt.generate_password_hash(user_password).decode('utf-8')
        print("hash password",hash_password)
        response = {
            "user_name":user_name,
            "user_email":user_email,
             "user_password":str(hash_password)
        }
        return await make_response(jsonify(response),201)
     except Exception as e:
        #print(e)
        error={"status":"fail","message":"internal server error"}
        return await make_response(jsonify(error)) 
         