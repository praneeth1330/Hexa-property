import React from "react";
import { Parallax } from "react-parallax";
import immg from "../assets/10.jpg";

const parallax = () => {
	return (
		<div className=" w-full ">
			<Parallax strength={600} bgImage={immg}>
				<div className="  h-[50vh] duration-300 eas">
					<div className=" flex justify-center items-center">
						<h1 className=" absolute top-1/2 text-4xl lg:text-6xl text-orange-600 font-bold ">
							live the luxury
						</h1>
					</div>
				</div>
			</Parallax>
		</div>
	);
};

export default parallax;
