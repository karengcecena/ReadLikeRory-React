"use strict";

function CreateAccountPage() {
    return (
        <React.Fragment>
            <div className="parent intro">
                <div className="child">
                <h2>Create an Account</h2>
                <form action="/create_account" method="POST">
                    <p>
                        Username <input type="text" name="username" required />
                    </p>
                    <p>
                        Password <input type="password" name="password" required />
                    </p>
                    <p>
                        <input className="button input_btn" type="submit" />
                    </p>
                </form>
                </div>
            </div>
        </React.Fragment>
    );
  }