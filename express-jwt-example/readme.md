curl  --header 'Content-Type: application/json' --data '{"username": "admin","password": 1234"}' --location 'http://localhost:3000/login'

curl --location 'http://localhost:3000/protected' --header 'Content-Type: application/json' --header 'Authorization: ••••••'
