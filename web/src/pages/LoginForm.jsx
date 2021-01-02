import React from "react";
import { Link } from "react-router-dom";

import IndexLayout from "../layouts/IndexLayout";

const LoginForm = () => {
    function login(event) {
        event.preventDefault();
        window.location.href = "http://localhost:3000/home";
    }

    return (
        <IndexLayout title="Login">
            <form onSubmit={(event) => login(event)}>
                <div className="input">
                    <label htmlFor="">Email</label>
                    <input type="text" />
                </div>
                <div className="input">
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
                <button>Login</button>

                <p>Don’t have account? </p>
                <Link to="/signup">Sign up now</Link>
            </form>
        </IndexLayout>
    );
};

export default LoginForm;
