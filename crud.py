"""CRUD operations."""

from model import User, Book, ReadList, ToBeReadList


def create_user(username, password):
    """Creates a user"""
    
    return User(username=username, password=password)

def get_user_by_username(username):
    """Gets user by their username"""

    return User.query.filter(User.username == username).first()

def create_book(title, author, poster_path):
    """Create and return a new book."""

    return Book(title=title, author=author, poster_path=poster_path)

def get_all_books():
    """Returns all books"""

    return Book.query.all()

def add_to_ToBeReadList(book_id, user):
    """Adds book to users to be read list"""

    return ToBeReadList(user_id=user.user_id, book_id=book_id)

def add_to_ReadList(book_id, user):
    """Adds book to users read list"""

    return ReadList(user_id=user.user_id, book_id=book_id)

def get_ToBeReadList_book_by_id(book_id, user):
    """Return book in to be read list"""

    return ToBeReadList.query.filter(ToBeReadList.book_id == book_id, ToBeReadList.user_id == user.user_id).first()

def get_ReadList_book_by_id(book_id, user):
    """Return book in to be read list"""
    
    return ReadList.query.filter(ReadList.book_id == book_id, ReadList.user_id == user.user_id).first()

def get_all_ReadList(user):
    """Returns users read list"""

    return ReadList.query.filter(ReadList.user_id == user.user_id).all()

def get_all_ToBeReadList(user):
    """Returns users read list"""

    return ToBeReadList.query.filter(ToBeReadList.user_id == user.user_id).all()

def list_to_dict(list):
    """Returns read and to be read lists as dictionaries for json formatting"""
    
    return {
        'book_id': list.book_id,
        'title': Book.query.get(list.book_id).title,
        'author' : Book.query.get(list.book_id).author,
        'poster_path': Book.query.get(list.book_id).poster_path,
    }