import React from "react";
import Plans from "../assets/5.png";

const PLan = () => {
	return (
		<div className="py-20 bg-slate-100 ">
			<div className="flex items-center justify-center flex-col ">
				<div className=" w-4/5 flex flex-col  items-center justify-center gap-y-5 shadow-lg border-2 bg-white">
					<h1 className="capitalize  text-4xl font-bold text-center py-5">
						appartment plan
					</h1>
					<div className=" grid  gap-y-5 lg:grid-cols-2 ">
						<div className="capitalize bg-orange-600 text-white  px-10 py-10 ">
							<h1 className="text-3xl font-semibold py-5">the Studio</h1>
							<p>
								Enimad minim veniam quis nostrud exercitation ullamco laboris.
								Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
								eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd
								minim veniam.
							</p>
							<div className=" capitalize py-10 flex flex-col gap-y-5">
								<p>total area -1250 sq.ft</p>
								<p>bedtoom area -150 sq.ft</p>
								<p>bathroom area -45 sq.ft</p>
								<p>garden area -130 sq.ft</p>
								<p>dining area -250 sq.ft</p>
								<p>balcony area -170 sq.ft</p>
							</div>
						</div>
						<div className="2">
							<div className="">
								<img src={Plans} alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PLan;
