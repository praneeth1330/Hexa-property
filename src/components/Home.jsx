import React from "react";
import Head from "../assets/21.png";
import Intro from "./Intro";
import Cards from "./Cards";
import Focus from "./Focus";
import Market from "./Market";
import Navbar from "./Navbar";
import Today from "./Today";
import Footer from "./Footer";
import PLan from "./PLan";
import Parallax from "./Parallax";
import Aminities from "./Aminities";

import Fade from "react-reveal/Fade";

const Header = () => {
	return (
		<div className="">
			<Navbar />

			<div className="w-full flex flex-col justify-center items-center ">
				<div className=" w-full   flex md:items-center justify-center bg-slate-100 py-10">
					<div className=" w-4/5 grid md:grid-cols-2  gap-y-5">
						<div className=" flex flex-col justify-center md:gap-7 gap-y-5">
							<Fade bottom>
								<div className=" flex gap-2 items-center object-cover">
									<i class="fa-solid fa-house text-orange-500"></i>
									<h1>Real Estate Agency</h1>
								</div>
							</Fade>
							<Fade bottom>
								<div className="">
									<h1 className=" text-4xl md:text-6xl font-bold">
										Find Your Dream House With Us
									</h1>
								</div>
							</Fade>
							<Fade bottom>
								<div className=" flex  justify-between">
									<p className=" overflow-hidden border-l-2 border-black px-4">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Accusamus voluptates nemo facere iste facilis modi
										temporibus eligendi! Aliquid corrupti debitis minus aliquam.
									</p>
								</div>
							</Fade>
							<Fade bottom>
								<div className="">
									<button className="btn">Make An Enquiry</button>
								</div>
							</Fade>
						</div>
						<div className=" flex items-center justify-center">
							<div className="image flex items-center justify-center">
								<img
									src={Head}
									alt=""
									className=" h-full w-full object-cover"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="w-4/5 relative bottom-5 bg-white  py-10 flex items-center justify-center shadow-3xl lg:py-20 ">
					<div className=" relative w-auto md:w-full gap-4 flex  flex-col md:flex-row  flex-auto items-center justify-between lg:px-4 lg:absolute ">
						<div className="">
							<select
								name="area"
								id="area"
								className="px-4 py-3 capitalize  border-2 w-full "
							>
								<option value="area">choose city</option>
								<option value="area">hyderabad</option>
								<option value="area">Mumbai</option>
								<option value="area">pune</option>
								<option value="area">bangalore</option>
							</select>
						</div>
						<div className=" ">
							<select
								name="area"
								id="area"
								className="px-4 py-3 capitalize border-2 "
							>
								<option value="area">Proprty status</option>
								<option value="area">open house</option>
								<option value="area">rent</option>
								<option value="area">sell</option>
								<option value="area">buy</option>
								<option value="area">sold</option>
							</select>
						</div>
						<div className=" ">
							<select
								name="area"
								id="area"
								className="px-4 py-3 capitalize  border-2 "
							>
								<option value="area">property type</option>
								<option value="area">studio room</option>
								<option value="area">flat</option>
								<option value="area">indipendent</option>
								<option value="area">co-li</option>
							</select>
						</div>

						<div className="">
							<button className="btn w-full"> Search</button>
						</div>
					</div>
				</div>

				<Intro />
				<Market />
				<Today />
				<Focus />
				<Cards />
				<Parallax />
				<PLan />
				<Aminities />
				<Footer />
			</div>
		</div>
	);
};

export default Header;
