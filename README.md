
# MoviesAPI

MoviesAPI is a RESTful API about movies where people can add, edit, read, and 
delete a data about movies (CRUD).

This API is connected to a database, so all of the changes will remain in the database.

## Run Locally
To run this project, make sure that you have MongoDB installed on your device.

if you haven't install MongoDB, you can download it from here

https://www.mongodb.com/try/download/community

after you installed MongoDB, you can do the following steps to run this MoviesAPI. 

#
Clone the project

```bash
  git clone https://github.com/Kurniakun17/MoviesAPI
```

Go to the project directory

```bash
  cd ./MoviesAPI
```

Install dependencies

```bash
  npm install
```

Run the server

```bash
  npm run dev
```

## API DOCS

### Get All Movies Datas
Endpoint 
```BASH
GET http://localhost:3000/
```

### Get Single Movie Data
Endpoint
```BASH
GET http://localhost:3000/{id}
```

### Update Movie Data
Endpoint
```BASH
PUT http://localhost:3000/{id}
```

### Delete Movie Data
Endpoint
```BASH
Delete http://localhost:3000/{id}
```

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Authors

- [@Kurniakun17](https://www.github.com/Kurniakun17)
