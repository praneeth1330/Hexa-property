import React from "react";
import Logo from "../assets/logo.png";
import Payment from "../assets/payment-4.png";

const Footer = () => {
	return (
		<div className="w-full bg-slate-800 text-white capitalize">
			<div className="">
				<div className=" px-10">
					<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 py-20">
						<div className="1 flex flex-col gap-y-5">
							<div className="footer-logo flex items-center ">
								<img src={Logo} alt="" className="w-20  " />
								<h1 className=" text-4xl font-bold ">HEXA</h1>
							</div>
							<div className="">
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Debitis non praesentium cum.
								</p>
							</div>
							<div className=" flex flex-col gap-y-5 text-sm text-slate-400 cursor-pointer">
								<div className=" flex items-center gap-x-2">
									<i class="fa-solid fa-location-dot"></i>{" "}
									<h1>Hebbal,bangalore,india, 500059</h1>
								</div>
								<div className="flex items-center gap-x-2">
									<i class="fa-solid fa-phone"></i>
									<p>(+040) 254 2465</p>
								</div>
								<div className="flex items-center gap-x-2">
									<i class="fa-regular fa-envelope"></i>
									<p>hexaproperty@info.in</p>
								</div>
								<div className=" flex justify-between w-4/5 ">
									<a
										href="https://www.facebook.com"
										target="_blank"
										className="hover:text-orange-600"
									>
										<i class="fa-brands fa-facebook"></i>
									</a>
									<a
										href="https://www.instagram.com"
										target="_blank"
										className="hover:text-orange-600"
									>
										<i class="fa-brands fa-instagram"></i>
									</a>
									<a
										href="https://www.instagram.com"
										target="_blank"
										className="hover:text-orange-600"
									>
										<i class="fa-brands fa-linkedin"></i>
									</a>
									<a href="" target="_blank" className="hover:text-orange-600">
										<i class="fa-brands fa-twitter"></i>
									</a>
								</div>
							</div>
						</div>
						<div className="2">
							<div className=" flex flex-col gap-y-5 text-lg">
								<h1 className="font-semibold text-2xl">Company</h1>
								<div className=" flex flex-col gap-5 ">
									<a href="#" className="hover:text-orange-600">
										about
									</a>
									<a href="#" className="hover:text-orange-600">
										Blogs
									</a>
									<a href="#" className="hover:text-orange-600">
										sites
									</a>
									<a href="#" className="hover:text-orange-600">
										contact
									</a>
									<a href="#" className="hover:text-orange-600">
										FAQ's
									</a>
								</div>
							</div>
						</div>
						<div className="3">
							<div className=" flex flex-col gap-y-5">
								<h1 className="font-semibold text-2xl">Services</h1>
								<div className=" flex flex-col gap-5 text-lg ">
									<a href="#" className="hover:text-orange-600">
										cart
									</a>
									<a href="#" className="hover:text-orange-600">
										wishlist
									</a>
									<a href="#" className="hover:text-orange-600">
										login
									</a>
									<a href="#" className="hover:text-orange-600">
										checkout
									</a>
									<a href="#" className="hover:text-orange-600">
										terms & conditions
									</a>
								</div>
							</div>
						</div>
						<div className="4">
							<div className=" flex flex-col gap-y-5">
								<h1 className="font-semibold text-2xl">customer care</h1>
								<div className=" flex flex-col gap-5 text-lg ">
									<a href="#" className="hover:text-orange-600">
										my account
									</a>
									<a href="#" className="hover:text-orange-600">
										cart
									</a>
									<a href="#" className="hover:text-orange-600">
										cupons
									</a>
									<a href="#" className="hover:text-orange-600">
										adding list
									</a>
									<a href="#" className="hover:text-orange-600">
										login
									</a>
								</div>
							</div>
						</div>
						<div className="5">
							<div className="flex flex-col gap-y-5">
								<h1 className="font-semibold text-2xl">News letter</h1>
								<p className="text-lg">
									Subscribe to our weekly Newsletter and receive updates via
									email.
								</p>
								<div className="flex items-center">
									<input
										type="email"
										className="bg-white w-full h-14 border-none text-black"
									/>
									<i class="fa-solid fa-arrow-right fa-2x py-3 w-12  bg-orange-600 text-center "></i>
								</div>
								<div className="">
									<h1 className="text-2xl font-semibold">we accept </h1>
									<div className="">
										<img src={Payment} alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" bg-slate-600 flex flex-col md:flex-row justify-between items-center gap-y-5 font-semibold text-lg py-6 px-5 cursor-pointer dot">
				<h1>All rights recived</h1>
				<div className=" flex flex-col md:flex-row  items-center gap-5">
					<h1>terms & conditions</h1>
					<h1>Clame</h1>
					<h1>privacy & policy</h1>
				</div>
			</div>
		</div>
	);
};

export default Footer;
