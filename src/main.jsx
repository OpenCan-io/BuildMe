import React from "react"
import { AuthClient } from "@dfinity/auth-client"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

/**
 * @dfinity/agent requires this. Can be removed once it's fixed
 */
window.global = window;
AuthClient.create().then((v) => {
  window.authClient = v
});

ReactDOM.render(
  <React.StrictMode>
    <main><App /></main>
  </React.StrictMode>,
  document.getElementById("root"),
)
