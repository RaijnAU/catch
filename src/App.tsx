import React from "react";
import "./App.css";
import ProductPage from "./components/ProductPage/ProductPage";
import "whatwg-fetch";

const App = () => (
	<div className="container">
		<ProductPage />
	</div>
);

export default App;
