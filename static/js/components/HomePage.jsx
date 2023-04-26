"use strict";

// const Link = ReactRouterDOM.Link;

function HomePage() {
    return (
        <React.Fragment>
            <div className="parent intro">
                <div className="child welcome">
                    <h1>Welcome to Read Like Rory</h1>
                    <p>Are you up for the challenge?</p>
                     <Link to="/create_account_page">Create an account</Link> Or <Link to="/login_page">Login</Link>
                </div>
            </div>
        </React.Fragment>
    );
}