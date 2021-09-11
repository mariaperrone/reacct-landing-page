import React from "react";
import Cards from "./cards";

const Cards_container = () => {
	return (
		<div className="row d-flex justify-content-center">
			<Cards className="col-md-3" />
			<Cards className="col-md-3" />
			<Cards className="col-md-3" />
			<Cards className="col-md-3" />
		</div>
	);
};

export default Cards_container;
