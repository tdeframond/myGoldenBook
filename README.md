# MY GOLDEN BOOK
small golden book application featuring mongoDB + NodeJS (express, mangoose ...) + ReactJS 

## first step
install NodeJS, Mongo server and npm

## launch the app

### 1) start mongo server

  sudo service mongodb stop
  mongod --smallfiles

### 2) start node server

  node routes.js

### 3) start front-end server (with react-create-app module)

  cd my-app
  npm start

### fonctions diverses :

curl -d '{"SignatureOfGuest":"val", "MessageofGuest":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/signatures
