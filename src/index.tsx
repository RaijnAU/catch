import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import State from "./state/index";

ReactDOM.render(
	<State>
		<App />
	</State>,
	document.getElementById("root"),
);
