"use strict";

function LoginPage() {
    return (
      <div className="parent intro">
        <div className="child">
          <h2>Log In</h2>
          <form action="/login" method="POST">
            <p>
              Username <input type="text" name="username" />
            </p>
            <p>
              Password <input type="password" name="password" />
            </p>
            <p>
              <input className="button input_btn" type="submit" />
            </p>
          </form>
        </div>
      </div>
    );
  }