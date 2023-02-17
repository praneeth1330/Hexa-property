import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const options = {
	method: "GET",
	url: "https://realty-in-us.p.rapidapi.com/properties/list-for-sale",
	params: {
		state_code: "NY",
		city: "New York City",
		offset: "0",
		limit: "200",
		sort: "relevance",
	},
	headers: {
		"X-RapidAPI-Key": "fb38206985msh31e0fb81a1357bbp13a31djsn721f56abed06",
		"X-RapidAPI-Host": "realty-in-us.p.rapidapi.com",
	},
};
const Cards = () => {
	const [property, setProperty] = useState([]);

	const buildings = () => {
		axios
			.request(options)
			.then(function (response) {
				setProperty(response.data.listings);
				console.log(response.data.listings);
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	const navigate = useNavigate();
	const House = () => {
		navigate("/house");
	};

	useEffect((e) => {
		e?.preventDefault();

		buildings();
	}, []);

	return (
		<div className="w-full h-auto flex justify-center items-center py-20 ">
			<div className="w-4/5  md:h-auto overflow-clip px-5">
				<h1 className="capitalize font-bold text-4xl py-10 text-center">
					Property for sale
				</h1>
				<ul className="grid  grid-cols-1 lg:grid-cols-3  gap-5 cursor-pointer ">
					{property.slice(13, 16).map((item) => (
						<li
							key={item.property_id}
							className=" flex flex-col gap-y-5   capitalize  bg-white z-10 shadow-xl border-2"
							onClick={House}
						>
							<img
								src={item.photo}
								alt=""
								className=" w-full h-60  object-cover "
							/>
							<div className="px-2 flex flex-col gap-y-5 py-4">
								<h1 className="text-2xl capitalize font-semibold">
									new Houses with good view
								</h1>
								<h1 className="text-red-600 capitalize">{item.prop_status}</h1>
								<h2 className="text-slate-400">
									<span className="text-slate-800 font-semibold ">Address</span>
									: {item.address.slice(0, 25)}
								</h2>
								<div className=" grid grid-cols-3">
									<h1 className="text-slate-400 flex flex-col border-l-2 px-2 text-lg">
										<span className="items-center">
											<i class="fa-solid fa-bed fa-xl text-orange-600 px-1"></i>
											{item.beds}
										</span>
										<span className="text-slate-800 text-sm  ">bedrooms</span>
									</h1>
									<h1 className="text-slate-400 flex flex-col border-l-2 px-2 text-lg">
										<span className="items-center">
											<i class="fa-solid fa-shower fa-xl text-orange-600 px-1"></i>
											{item.baths}
										</span>
										<span className="text-slate-800 text-sm  ">bathrooms</span>
									</h1>
									<h1 className="text-slate-400 flex flex-col border-l-2 px-2 text-lg">
										<span className="items-center">
											<i class="fa-solid fa-square fa-xl text-orange-600 px-1"></i>
											{item.sqft}
										</span>
									</h1>
								</div>
								<p className="text-orange-500 text-2xl">
									<span className="text-slate-800 font-semibold ">
										Price :{" "}
									</span>
									{item.price}
								</p>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Cards;
