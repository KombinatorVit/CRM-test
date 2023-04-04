import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./App";
import AuthProvider from "./providers/AuthProvider";

ReactDOM.render(
    <AuthProvider>
        <Router>
            <App/>
        </Router>
    </AuthProvider>,
    document.getElementById("root")
)
;

