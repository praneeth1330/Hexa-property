import React from "react";
import Fade from "react-reveal/Fade";

const Aminities = () => {
	return (
		<div>
			<div className="w-full flex flex-col ">
				<div className="">
					<h1 className="capitalize text-4xl font-bold text-center py-10">
						our Aminities
					</h1>
					<div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-10 w-full capitalize">
						<Fade bottom>
							<div className=" flex flex-col gap-y-10 p-10 items-center justify-center shadow-xl rounded-xl hover:bg-orange-600 hover:text-white change">
								<i class="fa-solid fa-car fa-5x text-orange-600"></i>
								<h1 className="text-lg font-semibold">parking space</h1>
							</div>
						</Fade>
						<Fade bottom>
							<div className=" flex flex-col gap-y-10 p-10 items-center justify-center shadow-xl rounded-xl hover:bg-orange-600 hover:text-white change">
								<i class="fa-solid fa-person-swimming fa-5x text-orange-600"></i>
								<h1 className="text-lg font-semibold">swimming pool</h1>
							</div>
						</Fade>
						<Fade bottom>
							<div className=" flex flex-col gap-y-10 p-10 items-center justify-center shadow-xl rounded-xl hover:bg-orange-600 hover:text-white change">
								<i class="fa-solid fa-shield-halved fa-5x text-orange-600"></i>
								<h1 className="text-lg font-semibold">secutity</h1>
							</div>
						</Fade>
						<Fade bottom>
							<div className=" flex flex-col gap-y-10 p-10 items-center justify-center shadow-xl rounded-xl hover:bg-orange-600 hover:text-white change">
								<i class="fa-solid fa-truck-medical fa-5x text-orange-600"></i>
								<h1 className="text-lg font-semibold">medical centre</h1>
							</div>
						</Fade>
						<Fade bottom>
							<div className=" flex flex-col gap-y-10 p-10 items-center justify-center shadow-xl rounded-xl hover:bg-orange-600 hover:text-white change">
								<i class="fa-solid fa-book fa-5x text-orange-600"></i>
								<h1 className="text-lg font-semibold">library area</h1>
							</div>
						</Fade>
						<Fade bottom>
							<div className=" flex flex-col gap-y-10 p-10 items-center justify-center shadow-xl rounded-xl hover:bg-orange-600 hover:text-white change">
								<i class="fa-solid fa-house-signal fa-5x text-orange-600"></i>
								<h1 className="text-lg font-semibold">smart homes</h1>
							</div>
						</Fade>
						<Fade bottom>
							<div className=" flex flex-col gap-y-10 p-10 items-center justify-center shadow-xl rounded-xl hover:bg-orange-600 hover:text-white change">
								<i class="fa-solid fa-store fa-5x text-orange-600"></i>
								<h1 className="text-lg font-semibold">super market</h1>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Aminities;
