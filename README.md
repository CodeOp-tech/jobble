# Jobble

## Setup

* Run **npm install** in project directory. This will install server-related dependencies such as express.
* **cd client** and run **npm install**. This will install client dependencies (React).

## Database Prep

* Access the MySQL interface in your terminal by running **mysql -u root -p**
* Create a new database called Jobble: **create database Jobble**
* Add a .env file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:
```
  DB_HOST=localhost
  DB_USER=root
  DB_NAME=Jobble
  DB_PASS=YOUR PASSWORD
  ```

## Install Sequelize and DB Migrations

* Run **npm install sequelize mysql2** and **npm install --save-dev sequelize-cli**.
* Init the folder structure with **npx sequelize-cli init**

* This will create the following folders:
```
- config
- models
- migrations
- seeders
```
* Add your DB access data on your config/config.js

* Run **npm run migrate** in the project folder of this repository, in a new terminal window. This will create a few tables in your database with many to many relationships:

```
users
Jobs
UsersJobs
Favorites
SequelizeMeta
```

* Make sure you understand how the tables are constructed. In your MySQL console, you can run use Jobble; and then describe "table"; to see the structure of the each table.

## Development
* Run **yarn start** or **npm start** in project directory to start the Express server on port 5000.
* In another terminal, do cd client and run yarn start or npm start to start the client in development mode with hot reloading in port 3000.

## Description

This app is a job portal, where there are 2 types of users: **regular users** and **admin users**. **Regular users** can search for jobs and apply for jobs, they can also save jobs to a favorite section. The **admin users** can post jobs, delete jobs and see who has applied to their job posts.

The idea is to make job searching fan an easy and maybe not so cold.

The application is a full stack app using React for the front end, Node/Express for the api, Sequelize and MySQL for the database.

The database will consist of four tables:
This is the database schema:

![Database image](/DatabaseTable.png)

# Front End

The app is divided into 16 components:
```
* Home.js
* Navbar.js**
* AdminDashboard.js
* AuthProvider.js
* DispFavorites.js
* EmployerJob.js
* FileUpload.js
* Dashboard.js
* JobList.js
* JobOffer.js
* LoginForm.js
* SignUpForm.js
* Profile.js
* PrivateRoute.js
* PostJobOffer.js
* Searchbar.js
```

# Future features to be implemented

* A FileUpload table would be necessary in order to store the uploaded files somewhere so the admin would be able to retrieve them.
* In order to scale the project maybe create a new table for companies, so the admin instead of a user would be a company and therefore if the person stops working for the company there's no issues.
* In order to make the app more dynamic and not so cold, it'd be a good idea to implement a chat so both **admnin** and **user** can interact directly if they match.
* At the moment the Admin is not able to post or delete jobs in the app, that would be a needed feature for the Admin to have all the functionalities in use.
* The Searchbar could also implement Geolocation and search jobs by location.
* The Admin could also set up a date to remove the job post automatically with a calendar and the user could receive a notification that the job has been filled. 

