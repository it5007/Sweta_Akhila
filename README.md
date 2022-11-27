# Pro MERN Stack - 2nd Edition

You are browsing the source code at the end of one of the sections in the book.

The project's README which contains the list of all chapters, sections
their sources and other useful information can be found in the
[master branch](https://github.com/vasansr/pro-mern-stack-2).

# ReadME
* To create a docker image with 2 ports 3000, 8000 and 27017 is for mongodb# (In power shell run)
   docker run --name IT5007 -p 8000:8000 -p 27017:27017 -p 3000:3000 -dit it5007_tutorial:project
* Open the docker image in visual code and attach shell. Then,
    git clone, checkout branch
* cd api
* npm install
* systemctl start mongod
* mongo vanner scripts/init.mongo.js
* screen npm start (http://localhost:3000/graphql ) - Static WebServer / GraphQL Server
* Ctrl + A , then d (Detach from screen , So that API server continues to run)
* cd ../ui
* npm install
* Add Keys to GoogleMapsAPI and OAUTHAPI key in src/components/UseMap.jsx and src/components/AuthHeader.jsx
* npm run compile
* screen npm start (http://localhost:8000/) - UI Server
* Open http://localhost:8000/ . 
* All files that are currently in repo are being used.   
