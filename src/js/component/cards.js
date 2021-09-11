import React from "react";

const Cards = () => {
	return (
		<div className="card p-3" style={{ width: "100%" }}>
			<img
				className="card-img-top"
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTAxhe_mfS4YIPO1QrWsMyrSlenDZ5DkLCIw&usqp=CAU"
				alt="Card image cap"></img>
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
				<p className="card-text">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Donec convallis rutrum justo in dignissim.
				</p>
				<a href="#" className="btn btn-primary">
					Find Out More!
				</a>
			</div>
		</div>
	);
};

export default Cards;
