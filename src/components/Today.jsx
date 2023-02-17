import React from "react";
import Room1 from "../assets/11.jpg";
import Room2 from "../assets/12.jpg";
import Room3 from "../assets/13.jpg";
import Room4 from "../assets/9.png";

const Today = () => {
	return (
		<div className="w-full h-auto  flex items-center justify-center py-10">
			<div className="w-4/5">
				<div className="grid lg:grid-cols-2">
					<div className=" left flex flex-col gap-y-5 ">
						<div className=" flex flex-col gap-y-5">
							<div className="">
								<span className=" bg-red-100 px-4 py-1 rounded-2xl text-center text-orange-600  ">
									About us
								</span>
							</div>
							<h1
								className="md:text-6xl text-3xl font-bold
                         "
							>
								Today property
							</h1>
							<p>
								Houzez allow you to design unlimited panels and real estate
								custom forms to capture leads and keep record of all information
							</p>
							<div className="">
								<h1 className="flex items-center justify-start capitalize">
									{" "}
									<span className=" w-6 text-orange-600 text-6xl font-extralight">
										-
									</span>{" "}
									Live Music Cocerts at Luviana
								</h1>
								<h1 className="flex items-center justify-start capitalize">
									{" "}
									<span className=" w-6 text-orange-600 text-6xl font-extralight">
										-
									</span>{" "}
									Our SecretIsland Boat Tour is Just for You
								</h1>
								<h1 className="flex items-center justify-start capitalize">
									<span className=" w-6 text-orange-600 text-6xl font-extralight">
										-
									</span>{" "}
									spacious bedrooms
								</h1>
							</div>
							<div className="  grid grid-cols-2 gap-y-2 md:flex   md:flex-row md:justify-between items-center">
								<div className=" flex flex-col border-l-2 px-2">
									<div className="">
										<span className="font-bold">3</span>{" "}
										<i class="fa-solid fa-bed fa-xl text-orange-600"></i>
									</div>
									<p>Bedrooms</p>
								</div>
								<div className=" flex flex-col border-l-2 px-2">
									<div className="">
										<span className="font-bold">2</span>{" "}
										<i class="fa-solid fa-shower fa-xl text-orange-600"></i>
									</div>
									<p>Bathrooms</p>
								</div>
								<div className=" flex flex-col border-l-2 px-2">
									<div className="">
										<span className="font-bold">2</span>{" "}
										<i class="fa-solid fa-car-rear fa-xl text-orange-600"></i>
									</div>
									<p>Car Parking</p>
								</div>
								<div className=" flex flex-col border-l-2 px-2">
									<div className="">
										<span className="font-bold"></span>{" "}
										<i class="fa-regular fa-square fa-xl text-orange-600"></i>
									</div>
									<p>1500sq.ft</p>
								</div>
							</div>
						</div>
						<div className="">
							<div className="grid grid-cols-3">
								<div
									className="
									w-full h-full
								"
								>
									<img
										src={Room1}
										alt=""
										className="hover:scale-105 duration-300 ease-out p-2"
									/>
								</div>
								<div
									className="
								"
								>
									<img
										src={Room2}
										alt=""
										className="hover:scale-105 duration-300 ease-out p-2"
									/>
								</div>
								<div
									className="
								"
								>
									<img
										src={Room3}
										alt=""
										className="hover:scale-105 duration-300 ease-out p-2"
									/>
								</div>
							</div>
						</div>
					</div>
					{/* imgs */}
					<div className="right ">
						<div className="">
							<img src={Room4} alt="" className="px-4" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Today;
