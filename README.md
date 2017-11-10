# myGoldenBook
small golden book application featuring mongoDB + NodeJS (express, mangoose ...) + ReactJS 


1) start mongo server

sudo service mongodb stop
mongod --smallfiles

2) start node server

node routes.js

3) start front-end server (with react-create-app module)

cd my-app
npm start



NB : make sure that every npm modules are correctly installed to launch the app properly. This on both server and client (my-app) side.







fonctions diverses :

curl -d '{"SignatureOfGuest":"val", "MessageofGuest":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:8080/api/signatures
