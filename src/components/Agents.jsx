import React from "react";
import Agent1 from "../assets/1.jpg";
import Agent2 from "../assets/2.jpeg";
import Agent3 from "../assets/3.jpg";

const Agents = () => {
	return (
		<div className="w-full flex items-center justify-center py-20">
			<div className="w-4/5 ">
				<h1 className=" text-center text-4xl font-semibold capitalize py-10">
					our agents
				</h1>
				<div className="grid md:grid-cols-3 gap-10 capitalize">
					<div className="flex  flex-col gap-y-5 border-2">
						<div className="">
							<img src={Agent1} alt="" className="w-full h-80 object-fill " />
						</div>
						<h1 className="text-lg font-semibold px-5">simon jhons</h1>
						<h1 className="text-orange-600 px-5">Real estate broker</h1>
						<div className="flex w-3/5 justify-between items-center text-slate-500 px-5 pb-5">
							<i class="fa-brands fa-twitter"></i>
							<i class="fa-brands fa-instagram"></i>
							<i class="fa-brands fa-facebook"></i>
						</div>
					</div>
					<div className="flex  flex-col gap-y-5 border-2">
						<div className="">
							<img src={Agent2} alt="" className="w-full h-80 object-fill " />
						</div>
						<h1 className="text-lg font-semibold px-5">rodalph crik</h1>
						<h1 className="text-orange-600 px-5">buying brocker</h1>
						<div className="flex w-3/5 justify-between items-center text-slate-500 px-5 pb-5">
							<i class="fa-brands fa-twitter"></i>
							<i class="fa-brands fa-instagram"></i>
							<i class="fa-brands fa-facebook"></i>
						</div>
					</div>
					<div className="flex  flex-col gap-y-5 border-2">
						<div className="">
							<img src={Agent3} alt="" className="w-full h-80 object-fill " />
						</div>
						<h1 className="text-lg font-semibold px-5">meera joseph</h1>
						<h1 className="text-orange-600 px-5">sale broker</h1>
						<div className="flex w-3/5 justify-between items-center text-slate-500 px-5 pb-5">
							<i class="fa-brands fa-twitter"></i>
							<i class="fa-brands fa-instagram"></i>
							<i class="fa-brands fa-facebook"></i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Agents;
