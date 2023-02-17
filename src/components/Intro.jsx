import React from "react";
import AboutImg from "../assets/7.png";

const Intro = () => {
	return (
		<div className=" w-full flex items-center justify-center py-10 relative">
			<div className=" w-4/5 flex items-center justify-center ">
				<div className="grid lg:grid-cols-2 items-center justify-center ">
					<div className="">
						<div className="">
							<img src={AboutImg} alt="" className="" />
						</div>
					</div>
					<div className="h-full object-cover py-10 px-10 flex flex-col gap-4">
						<div className="">
							<span className=" bg-red-100 px-4 py-1 rounded-2xl text-center text-orange-600  ">
								About us
							</span>
						</div>
						<div className="">
							<h1 className=" text-4xl lg:text-6xl font-bold">
								The Leading Real Estate Rental Marketplace{" "}
								<span className="text-orange-600">.</span>
							</h1>
						</div>
						<div className="">
							<p className="">
								Over 39,000 people work for us in more than 70 countries all
								over the This breadth of global coverage, combined with
								specialist services
							</p>
						</div>
						<div className="boxes flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-10  ">
							<div className=" flex items-center gap-2">
								<i class="fa-solid fa-house-signal fa-2xl text-orange-600 bg-red-100  rounded-full"></i>
								<h1 className=" capitalize text-lg">Smart home design</h1>
							</div>
							<div className=" flex items-center gap-2">
								<i class="fa-solid fa-mountain-sun fa-2xl text-orange-600 bg-red-100 text-center items-center rounded-full"></i>
								<h1 className=" capitalize text-lg">Smart home design</h1>
							</div>
							<div className=" flex items-center gap-2">
								<i class="fa-brands fa-gratipay fa-2xl text-orange-600 bg-red-100  rounded-full"></i>
								<h1 className=" capitalize text-lg">Smart home design</h1>
							</div>
							<div className=" flex items-center gap-2">
								<i class="fa-solid fa-person-military-pointing fa-2xl text-orange-600 bg-red-100  rounded-full"></i>
								<h1 className=" capitalize text-lg">Smart home design</h1>
							</div>
						</div>
						<div className="">
							<h1 className="bg-red-100 text-orange-600 border-l-2 border-orange-600 py-5 px-5">
								"Enimad minim veniam quis nostrud exercitation llamco laboris.
								Lorem ipsum dolor sit amet"
							</h1>
						</div>
						<div className="">
							<h1 className="btn inline-block"> Our Services</h1>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
