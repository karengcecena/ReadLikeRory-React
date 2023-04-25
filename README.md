# 📚 ReadLikeRory

## 📖 Summary 

**ReadLikeRory** is a full-stack web app where book lovers and Gilmore Girls fans can create an account that automatically adds Rory’s Read List to their To Be Read Books, then add them to their Read List once read.

## 📋 Content
* [Deployment](#deployment)
* [About the Developer](#aboutme)
* [Tech Stack](#technologies)
* [Features](#features)
* [Database Model](#databasemodel)
* [Installation](#installation)


## 🌐 <a name="deployment"></a>Deployment

Deployed using AWS Lightsail

Check out ReadLikeRory's [Website](http://34.217.109.198/)


## 🪐 <a name="aboutme"></a>About the Developer

ReadLikeRory was created by Karen G. Cecena. Learn more about the developer on [LinkedIn](https://www.linkedin.com/in/karengcecena).


## 💻 <a name="technologies"></a>Technologies

**Tech Stack:**

- Python
- Flask
- PostgreSQL
- HTML5
- CSS3
- Bootstrap
- Jinja


## 🔍 <a name="features"></a>Features

![alt text](https://github.com/karengcecena/ReadLikeRory/blob/main/static/img/video1.gif "ReadLikeRory Login")

A new user can create an account which automatically populates that users To Be Read List with Rory Gilmore's (actual) Read List in the show Gilmore Girls. Creating an account utilizes password hashing to maintain user security. 

<br>

![alt text](https://github.com/karengcecena/ReadLikeRory/blob/main/static/img/video2a.gif "ReadLikeRory Profile Page")

After creating an account, a user can log in and see their profile. In their profile, a user can add the books they have already read to their Read List via the "Mark as Read" button. This will remove the book from the TBR list and add it below. 

<br>

![alt text](https://github.com/karengcecena/ReadLikeRory/blob/main/static/img/video2b.gif "ReadLikeRory Profile Page Progress Bar")

Similarly, users can remove books they have read if they want to re-read it. A user's reading progress is tracked above so the user knows how close they are to completing the ReadLikeRory challenge.


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