"use strict";

function BookCard(props) {
    const { bookId, title, author, posterPath, currentListName, handleMoveBook } = props;

    return (
        <div className="col book_card" id={bookId}>
            <div className="book_title">{title}</div>
            <img className="poster_img" src={posterPath} />
            <div className="author_name">By: {author}</div>
            <button
                type="button"
                className="read-btn"
                onClick={() => handleMoveBook(bookId, currentListName)}
            >
                {currentListName === 'readlist' ? 'Mark as To Be Read' : 'Mark as Read'}
            </button>
        </div>
    );
  }

function UserProfilePage() {
    
    const [currentUsername, setCurrentUsername] = useState(null);
    const [currentPercent, setCurrentPercent] = useState(0);
    const [readlist, setReadList] = useState([]);
    const [tobereadlist, setToBeReadList] = useState([]);

    const ToBeReadListBookCards= [];
    const ReadListBookCards= [];
    

    useEffect(() => {
        fetch('/user_profile_info')
        .then(response => response.json())
        .then(data => {
            setCurrentUsername(data.username);
            setCurrentPercent(data.percent);
            setReadList(data.readlist);
            setToBeReadList(data.tobereadlist[0]);          
        })
        .catch(error => console.error(error));
  }, []);

    if (tobereadlist) {
        for (const currentBookCard of tobereadlist) {
            ToBeReadListBookCards.push(
                <BookCard
                    bookId={currentBookCard.book_id}
                    title={currentBookCard.title}
                    author={currentBookCard.author}
                    posterPath={currentBookCard.poster_path}
                    currentListName="tobereadlist"
                    handleMoveBook={handleMoveBook}
                />,
            );
        }
    }

    if (readlist) {
        for (const currentBookCard of readlist) {
            ReadListBookCards.push(
                <BookCard
                    bookId={currentBookCard.book_id}
                    title={currentBookCard.title}
                    author={currentBookCard.author}
                    posterPath={currentBookCard.poster_path}
                    currentListName="readlist"
                    handleMoveBook={handleMoveBook}
                />,
            );
        }
    }

    function handleMoveBook(bookId, currentListName) {
        // Determine which list to move the book to
        const currentList = currentListName === 'readlist' ? readlist : tobereadlist;
        const newList = currentList === readlist ? tobereadlist : readlist;

        // Find the book to move in the current list
        const bookToMove = currentList.find(book => book.book_id === bookId);
 
        // Remove the book from the current list
        const updatedCurrentList = currentList.filter(book => book.book_id !== bookId);

        // Add the book to the new list
        const updatedNewList = [...newList, bookToMove];

        // Update the state with the new lists
        if (currentListName === 'readlist') {
            setReadList(updatedCurrentList);
            setToBeReadList(updatedNewList);
            setCurrentPercent((readlist.length - 1)/(readlist.length + tobereadlist.length)*100);
        } else {
            setToBeReadList(updatedCurrentList);
            setReadList(updatedNewList);
            setCurrentPercent((readlist.length + 1)/(readlist.length + tobereadlist.length)*100);
        }


        // Send a PUT request to update the book's list on the server
        fetch(`/user_profile/update_list`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                username: currentUsername,
                book_id: bookId,
                current_list_name: currentListName
            }),
        })
            .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            })
            .catch(error => {
            console.error('Error updating book list:', error);
            // If the server request fails, revert the state to the original lists
            setReadList(readlist);
            setToBeReadList(tobereadlist);
            });

    }

    return (
    <React.Fragment>
        <nav>
            <ul>
                <li>
                <a href="/logout">Logout</a>
                </li>
            </ul>
        </nav>
        <div className="alt_parent second">
        <div className="row title">
            <h1 className="col-12 col-lg-10">{currentUsername}'s reading progress</h1>
            <div className="col-12 col-lg-2">
            <div>
                <progress value={currentPercent} max="100" />
            </div>
            <div className="row">
                <p>{currentPercent}%</p>
            </div>
            </div>
        </div>
        <div className="alt_child">
            <h2 className="row list">To Be Read: </h2>
            <div className="row to_be_read">
                <div className="scrollmenu">{ToBeReadListBookCards}</div>
            </div>
            <h2 className="row list">Read: </h2>
                <div className="row read">
                <div className="scrollmenu">{ReadListBookCards}</div>
            </div>
            </div>
        </div>
    </React.Fragment>
);
}  