import ReactDOM from "react-dom";
import App from "./App.js";
import "./style/reset.css";
import "./style/style.css";

const app = <App />;
const root = document.querySelector(".root");
ReactDOM.render(app, root);