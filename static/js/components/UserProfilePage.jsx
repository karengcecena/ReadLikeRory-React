"use strict";

function BookCard(props) {
    return (
        <div className="col book_card" id={props.key}>
        <div className="book_title">{props.title}</div>
        <img className="poster_img" src={props.posterPath} />
        <div className="author_name">By: {props.author}</div>
            <form action="/user_profile/read" method="POST">
                <input type="hidden" id={props.key} name="book_id" value={props.key} />
                <button type="submit" className="read-btn">
                    Mark as Read
                </button>
            </form>
        </div>
    );
  }

function UserProfilePage() {
    
    const [currentUsername, setCurrentUsername] = useState(null);
    // const [currentUserID, setCurrentUserID] = useState(null);
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
            // setCurrentUserID(data.user_id);
            setCurrentPercent(data.percent);
            setReadList(data.readlist[0]);
            setToBeReadList(data.tobereadlist[0]);
        })
        .catch(error => console.error(error));
  }, []);

    if (tobereadlist) {
        for (const currentBookCard of tobereadlist) {
            ToBeReadListBookCards.push(
                <BookCard
                    key={currentBookCard.book_id}
                    title={currentBookCard.title}
                    author={currentBookCard.author}
                    posterPath={currentBookCard.poster_path}
                />,
            );
        }
    }

    if (readlist) {
        for (const currentBookCard of readlist) {
            ReadListBookCards.push(
            <BookCard
                key={currentBookCard.book_id}
                title={currentBookCard.title}
                author={currentBookCard.author}
                posterPath={currentBookCard.poster_path}
            />,
            );
        }
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