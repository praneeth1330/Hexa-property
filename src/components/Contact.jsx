import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";

const Contact = () => {
	return (
		<div>
			<Navbar />
			<div className="">
				<div className="flex items-center flex-col justify-center">
					<div className="py-20 bg-slate-100 w-full flex items-center justify-center">
						<Fade bottom>
							<h1 className="text-4xl font-bold "> Contact Us</h1>
						</Fade>
					</div>
					<div className="w-4/5 py-10">
						<h1 className="px-5 text-4xl  font-bold border-orange-600 border-l-2 py-5">
							Get In Touch
						</h1>
						<div className="grid md:grid-cols-3 gap-10 items-center justify-center py-20 ">
							<div className=" flex flex-col gap-y-7 items-center justify-center p-10 border-2">
								<i class="fa-solid fa-envelope fa-3x  text-orange-600"></i>
								<h1 className=" capitalize text-2xl font-semibold">
									email address
								</h1>
								<p className="text-sm text-slate-400">hexaproperty@info.in</p>
							</div>
							<div className=" flex flex-col gap-y-7 items-center justify-center p-10 border-2 ">
								<i class="fa-solid fa-phone fa-3x  text-orange-600"></i>
								<h1 className=" capitalize text-2xl font-semibold">
									phone number
								</h1>
								<p className="text-sm text-slate-400">+123456789</p>
							</div>
							<div className=" flex flex-col gap-y-7 items-center justify-center p-10 border-2">
								<i class="fa-solid fa-map-location fa-3x  text-orange-600"></i>
								<h1 className=" capitalize text-2xl font-semibold">
									Office address
								</h1>
								<p className="text-sm text-slate-400">
									18/A, New Born Town Hall bangalore, india
								</p>
							</div>
						</div>
						<div className=" border-2 p-5">
							<h1 className="px-5 text-4xl  font-bold border-orange-600 border-l-2 py-5">
								Get Quote
							</h1>
							<form
								action=""
								className=" flex flex-col md:grid md:grid-cols-2 gap-2 p-5 capitalize"
							>
								<input
									type="text"
									placeholder="Enter Your Name"
									className="h-12 px-2 border-2"
								/>
								<input
									type="email"
									placeholder="Enter Your Email"
									className="h-12 px-2 border-2"
								/>
								<input
									type="text"
									placeholder="Enter Your Phone"
									className="h-12 px-2 border-2"
								/>
								<input
									type="text"
									placeholder="Enter Type Of Service"
									className="h-12 px-2 border-2"
								/>
								<textarea
									name=""
									id=""
									cols="30"
									rows="10"
									className="col-span-2 border-2 px-2"
									placeholder="Describe"
								></textarea>
								<button className="btn"> Get Free Service</button>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Contact;
