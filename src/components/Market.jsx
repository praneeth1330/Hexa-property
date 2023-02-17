import React from "react";
import Fade from "react-reveal";

const Market = () => {
	return (
		<div className="w-full flex  items-center justify-center bg-slate-100 py-20">
			<div className=" w-4/5 grid grid-cols-2 gap-y-10 md:flex items-center justify-between">
				<div className="capitalize flex items-center justify-center flex-col gap-5">
					<i class="fa-solid fa-landmark lg:fa:5x  md:fa-3x fa-xl  text-orange-600 "></i>
					<Fade bottom>
						<h1 className="lg:text-4xl md:text-2xl font-bold">720+</h1>
					</Fade>
					<p className="text-xl">total sq area</p>
				</div>
				<div className="capitalize flex items-center justify-center flex-col gap-5">
					<i class="fa-regular fa-building lg:fa:5x  md:fa-3x fa-xl  text-orange-600 "></i>
					<Fade bottom>
						<h1 className="lg:text-4xl md:text-2xl font-bold">175+</h1>
					</Fade>
					<p className="text-xl">apartments sold</p>
				</div>
				<div className="capitalize flex items-center justify-center flex-col gap-5">
					<i class="fa-solid fa-trowel-bricks lg:fa:5x  md:fa-3x fa-xl  text-orange-600 "></i>
					<Fade bottom>
						<h1 className="lg:text-4xl md:text-2xl font-bold">325+</h1>
					</Fade>
					<p className="text-xl">total constructed</p>
				</div>
				<div className="capitalize flex items-center justify-center flex-col gap-5">
					<i class="fa-solid fa-couch lg:fa:5x  md:fa-3x fa-xl  text-orange-600 "></i>
					<Fade bottom>
						<h1 className="lg:text-4xl md:text-2xl font-bold">120k+</h1>
					</Fade>
					<p className="text-xl">flats sold</p>
				</div>
			</div>
		</div>
	);
};

export default Market;
