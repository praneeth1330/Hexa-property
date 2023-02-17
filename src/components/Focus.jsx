import React from "react";

const Focus = () => {
	return (
		<div className="w-full h-full flex items-center justify-center md:h-screen bg-slate-100">
			<div className=" w-4/5 justify-center items-center">
				<h1 className="capitalize text-2xl md:text-4xl items-center text-center py-10 font-bold ">
					our main focus
				</h1>

				<div className=" grid md:grid-cols-3 gap-10 md:gap-2 ">
					<div className="focus flex flex-col gap-y-5 p-10 items-center justify-center shadow-lg bg-white">
						<i class="fa-solid fa-house-flag fa-5x text-orange-600"></i>
						<h1 className="capitalize text-2xl md:text-4xl">To rent</h1>
						<p className="text-slate-400">
							over 1 million+ homes for sale available on the website, we can
							match you with a house you will want to call home.
						</p>
						<p className="focusp  capitalize text-lg cursor-pointer">
							find the home <i class="fa-solid fa-arrow-right"></i>{" "}
						</p>
					</div>
					{/* .......... */}
					<div className="focus flex flex-col gap-y-5 p-10 items-center justify-center shadow-lg bg-white">
						<i class="fa-solid fa-house-user fa-5x text-orange-600"></i>
						<h1 className="capitalize text-2xl md:text-4xl">to buy</h1>
						<p className="text-slate-400">
							over 1 million+ homes for sale available on the website, we can
							match you with a house you will want to call home.
						</p>
						<p className="focusp  capitalize text-lg cursor-pointer">
							find the home <i class="fa-solid fa-arrow-right"></i>{" "}
						</p>
					</div>
					{/*  */}
					<div className="focus flex flex-col gap-y-5 p-10 items-center justify-center shadow-lg bg-white">
						<i class="fa-solid fa-house-laptop fa-5x text-orange-600"></i>
						<h1 className="capitalize text-2xl md:text-4xl">To sell</h1>
						<p className="text-slate-400">
							over 1 million+ homes for sale available on the website, we can
							match you with a house you will want to call home.
						</p>
						<p className="focusp  capitalize text-lg items-center cursor-pointer ">
							find the home <i class="fa-solid fa-arrow-right"></i>{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Focus;
