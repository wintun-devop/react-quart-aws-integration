### virtial environment set-up (window os)
```
python -m venv quart-env
```
### env installation
```
pip install python-dotenv
```
### 1st-phase-requirements
```
pip install quart quart-cors quart_jwt_extended
```

### quart bcrypt for password hasing
- reference (https://quart-bcrypt.readthedocs.io/en/latest/)
```
pip install quart-bcrypt
```
### quart run with default port number 5000
```
quart run --reload
```
### quart run with specific port number 8000
```
quart run --port 8000 --reload 
```

### create api step-by-step
- blue print on route
- regiseter blue-print on app
