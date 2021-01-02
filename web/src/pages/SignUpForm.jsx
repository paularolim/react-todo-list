import React from "react";
import { Link } from "react-router-dom";

import IndexLayout from "../layouts/IndexLayout";

const SignUpForm = (props) => {
    

    return (
        <IndexLayout title="Sign Up">
            <div className="input">
                <label htmlFor="">Name</label>
                <input type="text" />
            </div>

            <div className="input">
                <label htmlFor="">Email</label>
                <input type="email" />
            </div>

            <div className="input">
                <label htmlFor="">Password</label>
                <input type="password" />
            </div>
            <button>Sign Up</button>

            <p>Don’t have an account?</p>
            <Link to="/">Login now</Link>
        </IndexLayout>
    );
};

export default SignUpForm;
