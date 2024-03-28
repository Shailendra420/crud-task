Backend:
To run a backend we will need to add 5 variables in .env file and they are as follows,
- DB_HOST=
- DB_USER=
- DB_PASSWORD=
- DB_NAME=
- PORT=8080(Any port can be added here but we will need to add the same port in the frontend's package.json proxy key, for eg. => "proxy": "http://localhost:8080")

Next we just have to run "npm run serve" command in the terminal to run the backend.

Frontend:
To run a frontend we need to add 1 variable in .env file and it is as follows,
- REACT_APP_BACKEND_BASEURL=http://localhost:8080
Next we just need to run "npm run start" command in the terminal to run the frontend.
