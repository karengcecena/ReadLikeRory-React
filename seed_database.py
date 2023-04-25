"""Script to seed database."""

import os

import crud
import model
import server

# import for hashing passwords
from passlib.hash import argon2

# dropping the db
os.system("dropdb books")

# creating the db
os.system("createdb books")

# connecting to the server
model.connect_to_db(server.app)

# creating all tables
model.db.create_all()

books_in_db = []
books_file = open("data/books.txt").readlines()

for line in books_file:
    line = line.strip("\n")
    title, author, poster_path = line.split("~")

    db_book = crud.create_book(title, author, poster_path)
    books_in_db.append(db_book)

model.db.session.add_all(books_in_db)
model.db.session.commit()