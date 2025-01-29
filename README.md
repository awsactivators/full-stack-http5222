# full-stack-http5222

## Week 2

https://auth0.com/blog/create-a-simple-and-stylish-node-express-app/
https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/
Extras about PUG

https://pugjs.org/api/getting-started.html (look at the links under Language Reference in the sidebar for the complete resource for PUG syntax)
https://www.iamtimsmith.com/blog/using-the-pug-templating-engine-part-2-logic
https://www.iamtimsmith.com/blog/using-the-pug-templating-engine-part-3-layouts



## setup mongodb authentication via terminal

nano /opt/homebrew/etc/mongod.conf
add
security:
  authorization: enabled

creating user in mongodb in admin db
db.createUser({ user: "useradmin", pwd: "http_5222_w4", roles: [{ role: "userAdminAnyDatabase", db: "admin" }] })
db.createUser({ user: "root", pwd: "http_5222_w4", roles: [{ role: "root", db: "admin" }] })
db.createUser({ user: "testdbuser", pwd: "http_5222_w4", roles: [{ role: "dbOwner", db: "http_5222_w2" }] })

start shell
mongosh

restart
brew services restart mongodb-community  

stop/start
brew services start mongodb-community@8.0

connecting with authentication
mongosh --port 27017 -u "root" -p (where -u is the user)

mongosh --port 27017 -u "admin" --authenticationDatabase "admin" -p

## Setting up atals mongodb cloud

atlast root pwd: zrZmvFCn2P4XM4QH
atlas ip: 142.214.83.211

atlas testdbuser pwd: Qtf4wv1AhDSMFU0Y
mongodb+srv://testdbuser:<testdbuser pwd>@cluster0.jp9u4.mongodb.net/


how to connect using vscode

Connecting with MongoDB for VS Code
1. Install MongoDB for VS Code.
In VS Code, open "Extensions" in the left navigation and search for "MongoDB for VS Code." Select the extension and click install.
2. In VS Code, open the Command Palette.
Click on "View" and open "Command Palette."
Search "MongoDB: Connect" on the Command Palette and click on "Connect with Connection String."
3. Connect to your MongoDB deployment.
Paste your connection string into the Command Palette.

Show Password
mongodb+srv://testdbuser:<testdbuser pwd>@cluster0.jp9u4.mongodb.net/

The password for testdbuser is included in the connection string for your first time setup. This password will not be available again after exiting this connect flow.
4. Click “Create New Playground” in MongoDB for VS Code to get started from view-command pallette.


using shell

mongosh

mongosh "mongodb+srv://cluster0.jp9u4.mongodb.net/" --apiVersion 1 --username testdbuser --password <testdbuser pwd>