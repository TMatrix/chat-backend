#### Start project:
0. MongoDB instance have to be active.
1. Install dependencies:
```npm install```
2. Start server:
```npm start```

#### Make next operations via Postman
* **CRUD operation for user:**
  * GET query for reading list of users:
     ```localhost:1428/api/user```
  * GET query for reading user with id=2:
    ```localhost:1428/api/user/2```
  * POST query for creating user
    ```localhost:1428/api/user```
  * PUT query for updating user with id=2:
    ```localhost:1428/api/user/2```
  * DELETE query for deleting user with id=2:
    ```localhost:1428/api/user/2```
* **CRUD operation for message:**
  * GET query for reading list of messages:
    ```localhost:1428/api/message```
  * GET query for reading message with id=2:
    ```localhost:1428/api/message/2```
  * POST query for creating message
    ```localhost:1428/api/message```
  * PUT query for updating message with id=2:
    ```localhost:1428/api/message/2```
  * DELETE query for deleting message with id=2:
    ```localhost:1428/api/message/2```

* **Get list of users have been talk with id=2 user:**
  * GET query for reading list of users:
    ```localhost:1428/api/messages/2``` 

***First response could be empty.***
***Please add content to collections "users" and "messages" of db "demotest" manually,***
***or use two prepared arrays with data from file "./init.js"***