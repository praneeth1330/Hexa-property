import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const links = [
		{ id: 1, link: "home" },
		{ id: 2, link: "about" },
		{ id: 3, link: "shop" },
		{ id: 4, link: "news" },
		{ id: 5, link: "contact" },
	];
	return (
		<div className="w-full flex  items-center justify-center">
			<div className=" w-4/5 h-auto  flex  items-center justify-center">
				<div className="w-full md:py-4 flex items-center justify-between ">
					<div className="logo flex items-center gap-2">
						<div className="img h-5 w-5">
							<img src={Logo} alt="" className="w-full h-full object-cover" />
						</div>
						<h1 className=" text-xl font-bold text-[#103034]">HEXA</h1>
					</div>
					<div className="">
						<ul className="hidden  md:flex ">
							<li className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-orange-500">
								<NavLink to="/">Home</NavLink>
							</li>
							<li className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-orange-500">
								<NavLink to="/about">about</NavLink>
							</li>
							<li className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-orange-500">
								<NavLink to="/shop">shop</NavLink>
							</li>
							<li className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-orange-500">
								<NavLink to="/news">News</NavLink>
							</li>
							<li className="px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-orange-500">
								<NavLink to="/contact">contact</NavLink>
							</li>
						</ul>
						<div
							onClick={() => setNav(!nav)}
							className="cursor-pointer pr-4 z-10  md:hidden"
						>
							{nav ? (
								<i class="fa-solid fa-xmark fa-2x"></i>
							) : (
								<i class="fa-solid fa-bars fa-2x"></i>
							)}
						</div>
						{nav && (
							<ul className="flex flex-col md:hidden translate-x-10 duration-500 items-center absolute top-12 right-0 w-2/4 h-auto bg-slate-100 z-20 rounded-bl-lg  ">
								<li className="px-4 duration-700 cursor-pointer capitalize py-1 text-xl hover:text-orange-500">
									<NavLink to="/">Home</NavLink>
								</li>
								<li className="px-4 duration-700 cursor-pointer capitalize py-1 text-xl hover:text-orange-500">
									<NavLink to="/about">about</NavLink>
								</li>
								<li className="px-4 duration-700 cursor-pointer capitalize py-1 text-xl hover:text-orange-500">
									<NavLink to="/shop">shop</NavLink>
								</li>
								<li className="px-4 duration-700 cursor-pointer capitalize py-1 text-xl hover:text-orange-500">
									<NavLink to="/news">news</NavLink>
								</li>
								<li className="px-4 duration-700 cursor-pointer capitalize py-1 text-xl hover:text-orange-500">
									<NavLink to="/contact">contact</NavLink>
								</li>
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
