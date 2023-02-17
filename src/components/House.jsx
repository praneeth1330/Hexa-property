import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Today from "./Today";

const House = () => {
	return (
		<div>
			<Navbar />
			<div className=" bg-slate-100">
				<Today />
			</div>
			<Footer />
		</div>
	);
};

export default House;
