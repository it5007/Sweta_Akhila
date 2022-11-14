# Pro MERN Stack - 2nd Edition

You are browsing the source code at the end of one of the sections in the book.

The project's README which contains the list of all chapters, sections
their sources and other useful information can be found in the
[master branch](https://github.com/vasansr/pro-mern-stack-2).

1)#To create a docker image with 2 ports 3000, 8000 and 27017 is for mongodb# (In power shell run)
   docker run --name IT5007 -p 8000:8000 -p 27017:27017 -p 3000:3000 -dit it5007_tutorial:project
2) Open the docker image in visual code and attach shell. Then,
    git clone, checkout branch
3) cd api
4) npm install
5) systemctl start mongod
6) mongo vanner scripts/init.mongo.js
7) screen npm start (http://localhost:3000/graphql ) - Static WebServer / GraphQL Server
8) Ctrl + A , then d (Detach from screen , So that API server continues to run)
9) cd ../ui
8) npm install
9) Add Keys to GoogleMapsAPI and OAUTHAPI key in src/components/UseMap.jsx and src/components/AuthHeader.jsx
10) npm run compile
11) screen npm start (http://localhost:8000/) - API Server
12) Open http://localhost:8000/ . 
13) All files that are currently in repo are being used.   
