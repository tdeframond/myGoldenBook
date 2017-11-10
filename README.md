# MY GOLDEN BOOK
small golden book application featuring mongoDB + NodeJS (express, mangoose ...) + ReactJS 

## first step
install NodeJS, Mongo server and npm
make sure all node modules are well installed in both server and client side (/my-app)

## launch the app

### 1) start mongo server

  sudo service mongodb stop
  mongod --smallfiles

### 2) start node server

  node routes.js

### 3) start front-end development server (with react-create-app module)

  cd my-app
  npm start


## divers

### faire une requete http post depuis le terminal

curl -d '{"SignatureOfGuest":"val", "MessageofGuest":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/signatures
