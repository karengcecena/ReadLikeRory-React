"""Models for Read Like Rory."""

from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """User information"""

    __tablename__ = "users"

    user_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String, unique=True)
    password = db.Column(db.String)

    # association tables:
    read_list = db.relationship('Book', secondary="read_lists", back_populates="read_users")
    to_be_read_list = db.relationship('Book', secondary="to_be_read_lists", back_populates="to_be_read_users")

    def __repr__(self):
        """Show info about user"""

        return f"<User user_id = {self.user_id} username = {self.username}>"


class Book(db.Model):
    """Book information"""

    __tablename__ = "books"

    book_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String)
    author = db.Column(db.String)
    poster_path = db.Column(db.String)

    # association tables:
    read_users = db.relationship('User', secondary="read_lists", back_populates="read_list")
    to_be_read_users = db.relationship('User', secondary="to_be_read_lists", back_populates="to_be_read_list")

    def __repr__(self):
        """Show info about a book"""

        return f"<Book book_id = {self.book_id} title = {self.title}>"

class ReadList(db.Model):
    """Read List information"""
    
    __tablename__ = "read_lists"

    item_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey("books.book_id"), nullable=False)

    # this is an association table, so it doesn't directly connect back to any table

    def __repr__(self):
        """Show info about Read List"""

        book = Book.query.get(self.book_id)

        return f"<ReadList item_id: {self.item_id} book_title: {book.title} user_id: {self.user_id} book_id: {self.book_id}>"

class ToBeReadList(db.Model):
    """To Be Read List information"""

    __tablename__ = "to_be_read_lists"

    item_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.user_id"), nullable=False)
    book_id = db.Column(db.Integer, db.ForeignKey("books.book_id"), nullable=False)

    # this is an association table, so it doesn't directly connect back to any table

    def __repr__(self):
        """Show info about To Be Read List"""
        book = Book.query.get(self.book_id)

        return f"<ToBeReadList item_id: {self.item_id} book_title: {book.title} user_id: {self.user_id} book_id: {self.book_id}>"


def connect_to_db(flask_app, db_uri="postgresql:///books", echo=True):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.app = flask_app
    db.init_app(flask_app)

    print("Connected to the db!")


if __name__ == "__main__":
    from server import app

    connect_to_db(app)