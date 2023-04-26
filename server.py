"""Server for Read Like Rory."""

from flask import (Flask, render_template, request, flash, session, redirect, jsonify)
from model import connect_to_db, db, Book
import crud

# from jinja2 import StrictUndefined

# import for hashing passwords
from passlib.hash import argon2

import json

app = Flask(__name__)
app.secret_key = "secret_session"
# app.jinja_env.undefined = StrictUndefined

# @app.route("/user_profile_page")
@app.route("/user_login")
@app.route("/login_page")
@app.route("/create_account_page")
@app.route("/")
def homepage():
    """View homepage."""

    # if "username" in session:
    #     return redirect("/user_profile_page")

    return render_template("index.html")

@app.route("/create_account", methods=["POST"])
def create_account():
    """Registers user and adds all books to to be read"""

    username = request.form.get("username")
    password = request.form.get("password")
    # to hash the password 
    password_hashed = argon2.hash(password)

    if crud.get_user_by_username(username):
        flash("Sorry, that username is already taken.")

    else:
        user = crud.create_user(username=username, password=password_hashed)

        db.session.add(user)
        db.session.commit()

        books = crud.get_all_books()

        for book in books: 
            book_folder = crud.add_to_ToBeReadList(book.book_id, user)
            
            db.session.add(book_folder)
            db.session.commit()

        return redirect("/login_page")

    return redirect ("/")

@app.route("/login", methods=["POST"])
def login_user():
    """Logs the user in"""

    username = request.form.get("username")
    password = request.form.get("password")
    user = crud.get_user_by_username(username)

    if user:

        # verify hashed password input is equal to one in DB
        if argon2.verify(password, user.password):
            session["username"] = user.username
            # return redirect ("/user_profile_info")
            return redirect ("/user_login")
        
        else:
            flash("Your password was incorrect. Please try again.")

    else:
        flash("Sorry, a user with that username doesn't exist")

    return redirect("/")

@app.route("/user_profile_info")
def display_user_profile():
    """Displays the user profile page"""
    
    user_username = session["username"]
    user = crud.get_user_by_username(user_username)

    count = 0 
    read_list = crud.get_all_ReadList(user)
    to_be_read_list = crud.get_all_ToBeReadList(user)

    read_list_dict = [crud.list_to_dict(r) for r in read_list]
    to_be_read_list_dict = [crud.list_to_dict(t) for t in to_be_read_list],

    for book in crud.get_all_ReadList(user):
        count += 1
        
    percent = (count/86)*100
    return jsonify({"username": user_username, "percent": percent, "readlist": read_list_dict, "tobereadlist": to_be_read_list_dict, "user_id": user.user_id})
  

# @app.route("/user_profile/read", methods=["POST"])
# def remove_from_to_be_read():
#     """Removes from to be read and adds to read"""

#     book_id = request.form.get("book_id")

#     user_username = session["username"]
#     user = crud.get_user_by_username(user_username)

#     # remove from to be read list
#     book_list = crud.get_ToBeReadList_book_by_id(book_id, user)
#     db.session.delete(book_list)
#     db.session.commit()

#     # add to read list
#     book_list = crud.add_to_ReadList(book_id, user)
#     db.session.add(book_list)
#     db.session.commit()

#     return redirect("/user_profile")

# @app.route("/user_profile/unread", methods=["POST"])
# def remove_from_read():
#     """Removes from read and adds to to be read"""

#     book_id = request.form.get("book_id")

#     user_username = session["username"]
#     user = crud.get_user_by_username(user_username)

#     # remove from read list
#     book_list = crud.get_ReadList_book_by_id(book_id, user)
#     db.session.delete(book_list)
#     db.session.commit()

#     # add to to be read list
#     book_list = crud.add_to_ToBeReadList(book_id, user)
#     db.session.add(book_list)
#     db.session.commit()

#     return redirect("/user_profile")

@app.route("/logout")
def logout_user():
    """Logs out the user by clearing the session."""
    
    if "username" in session: 
        session.clear()
 
    else:
        return redirect("/")
    
    return redirect("/")

if __name__ == '__main__':
    connect_to_db(app)
    app.run(debug=True)

