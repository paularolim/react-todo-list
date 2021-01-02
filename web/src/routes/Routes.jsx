import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../pages/LoginForm";
import SignUp from "../pages/SignUpForm";
import Home from "../pages/Home";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/signup" component={SignUp} />
                <Route path="/home" component={Home} />
            </Switch>
        </Router>
    );
};

export default Routes;
