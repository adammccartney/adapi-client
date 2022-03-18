# adapi-client

This client models some very simple use cases for asynchronous javascript. It
is intended as a small learning project. I'm sure there are a bunch of well
developed libraries that will let you get up to all sort of kitchen sink like
hijinks.

## goals 

+ develop a better understanding of asynchronous js (specifically the `fetch`
  API and `Promises`
+ lay the ground work for a more production ready solution for client apps that
  will need to handle authentication and various other HTTP request routines 


## installation 

clone it and npm install it!



### commands 

`npm run build` will build it using webpack

`npm run start` will start a webpack-dev-server running on port 9000


### notes

just to get rolling, `dummy_endpoint` includes a simple python server that
allows cross origin requests.

```
cd dummy_endpoint
python3 ./simpleserve.py 9001
```

you will setup a simple HTTPServer that listens on localhost on port 9001, its
goal is to make available `tok.json` so the javascript program can retrieve
values. 
