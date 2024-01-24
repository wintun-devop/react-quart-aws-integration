import os
from dotenv import load_dotenv

#to get to ensure from .env
load_dotenv(override=True)

# server secret(app secret) key and jwt secret key
APP_SECRET_KEY=os.getenv("APP_SECRET_KEY")
JWT_SECRET_KEY=os.getenv("JWT_SECRET_KEY")


# getting data from env
db_name=os.getenv("DB_NAME")
db_user=os.getenv("DB_USER")
db_password=os.getenv("DB_PASSWORD")
db_host=os.getenv("DB_HOST")

# DATABASE_LINK=f"postgresql://db_user:db_password@db_host/db_name"
DATABASE_LINK=f"postgresql://{db_user}:{db_password}@{db_host}/{db_name}"


#api end-points
AUTH_API_LINK = "/api/v1/auth"

# print("APP",APP_SECRET_KEY)
# print("JWT",JWT_SECRET_KEY)

