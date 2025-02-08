# 📚 ReadLikeRory V.2

## 📖 Summary 

**ReadLikeRory V.2** is a full-stack web app where book lovers and Gilmore Girls fans can create an account that automatically adds Rory’s Read List to their To Be Read Books, then add them to their Read List once read. I recreated the front-end of this project with the framework React. 

## 📋 Content
* [V1](#V1)
* [About the Developer](#aboutme)
* [Tech Stack](#technologies)
* [Features](#features)
* [Database Model](#databasemodel)
* [Installation](#installation)


## 🌐 <a name="V1"></a>V1

* ReadLikeRory V.1's [GitHub](https://github.com/karengcecena/ReadLikeRory)


## 🪐 <a name="aboutme"></a>About the Developer

ReadLikeRory V.2 was created by Karen G. Cecena. Learn more about the developer on [LinkedIn](https://www.linkedin.com/in/karengcecena).


## 💻 <a name="technologies"></a>Technologies

**Tech Stack:**

- Python
- Flask
- PostgreSQL
- ReactJS
- HTML5
- CSS3
- Bootstrap
- Cypress.io


## 🔍 <a name="features"></a>Features

![alt text](https://github.com/karengcecena/ReadLikeRory-React/blob/main/static/img/video1.gif "ReadLikeRory Login")

A new user can create an account which automatically populates that users To Be Read List with Rory Gilmore's (actual) Read List in the show Gilmore Girls. Creating an account utilizes password hashing to maintain user security. 

<br>

![alt text](https://github.com/karengcecena/ReadLikeRory-React/blob/main/static/img/user_prof1.gif "ReadLikeRory Profile Add")

After creating an account, a user can log in and see their profile. In their profile, a user can add the books they have already read to their Read List via the "Mark as Read" button. This will remove the book from the TBR list and add it to the Read List below dynamically. This will also dynamically update the percentage bar at the top. 

<br>

![alt text](https://github.com/karengcecena/ReadLikeRory-React/blob/main/static/img/user_prof2.gif "ReadLikeRory Profile Page Remove")

Similarly, users can remove dynamically books they have read via the "Mark as To Be Read" if they want to add it to the TBR to re-read it. 

![alt text](https://github.com/karengcecena/ReadLikeRory-React/blob/main/static/img/tests.jpeg "ReadLikeRory Cypress Tests")

I also incorporated Cypress.io for testing to ensure User Page shows main features once logged in.


## 🗂️ <a name="databasemodel"></a>Database Model

![alt text](https://github.com/karengcecena/ReadLikeRory/blob/main/static/img/ReadLikeRoryDataModel.jpeg "ReadLikeRory Database Model")


## ⚙️ <a name="installation"></a>Installation

To run ReadLikeRory:

Install PostgreSQL (Mac OSX)

Clone or fork this repo:

```
https://github.com/karengcecena/ReadLikeRory.git
```

Create and activate a virtual environment inside your MyViews directory:

```
virtualenv env
source env/bin/activate
```

Install the dependencies:

```
pip install -r requirements.txt
```

Set up & seed the database:

```
python seed_database.py
```

Run the app:

```
python server.py
```

You can now navigate to 'localhost:5000/' to access ReadLikeRory.
