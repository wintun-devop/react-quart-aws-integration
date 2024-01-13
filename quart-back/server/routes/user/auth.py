from quart import jsonify,make_response,Blueprint,request

#import api prefix
from server.server_config import AUTH_API_LINK
#import bcrypt
from server import bcrypt
#jwt function import
from quart_jwt_extended import (
                                jwt_required,
                                set_access_cookies,
                                set_refresh_cookies,
                                create_access_token,
                                create_refresh_token,
                                unset_jwt_cookies,
                                jwt_refresh_token_required
                                )

#declare blue print
auth_bp = Blueprint('auth',__name__,url_prefix=AUTH_API_LINK)

@auth_bp.route("/login",methods=["POST"])
async def login():
    req_body = await request.get_json()
    try:
        user_email=req_body["user_email"]
        user_password=req_body["user_password"]
        print("userpass",user_password)
        hash_pass = "$2b$12$IIkowUn4Xnxe8d4xVs1/Pe4V3bYUGXq64pfHUEVV98cfWbA0oHeum"
        isPasswordCorrect =await bcrypt.async_check_password_hash(hash_pass,user_password)
        print(isPasswordCorrect)
        response = {
            "user_email":user_email,
            "isPasswordCorrect":isPasswordCorrect
        }
        if isPasswordCorrect:
            # create the jwt and go make response
            token_attributes={"id":"dfuakflaf","name":"test_name","email":user_email}
            access_token = create_access_token(identity=token_attributes,fresh=True)
            refresh_token = create_refresh_token(identity=token_attributes)
            response=jsonify({**token_attributes,"access_token": access_token,"refresh_token": refresh_token,"authenticated":True})
            set_access_cookies(response,access_token)
            set_refresh_cookies(response,refresh_token)
            return response,201
        else:
            return make_response(jsonify({'status':'fail','msg':'email or password incorrect.'}),400)
    except Exception as e:
        print(e)
        error1={"status":"fail","message":"internal server error"}
        return await make_response(jsonify(error1),500)
    