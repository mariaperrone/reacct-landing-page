import React from "react";
import Cards_container from "./cards_container";
import Jumbotron from "./jumbotron";

const Body = () => {
	return (
		<div className="container">
			<Jumbotron />
			<Cards_container />
		</div>
	);
};

export default Body;
