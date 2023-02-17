import React from "react";
import Navbar from "./Navbar";
import Building from "../assets/24.jpg";
import Logo from "../assets/logo.png";
import Footer from "./Footer";
import Parallax from "../components/Parallax";
import Fade from "react-reveal/Fade";

const News = () => {
	return (
		<div>
			<Navbar />
			<div className="py-20 bg-slate-100 w-full flex items-center justify-center">
				<Fade bottom>
					<h1 className="text-4xl font-bold "> News About Us</h1>
				</Fade>
			</div>
			<div className="flex items-center justify-center  flex-col">
				<div className="w-4/5 py-20">
					<div className=" grid lg:grid-cols-2 gap-5  border-2 ">
						<div className="">
							<img src={Building} alt="" />
						</div>
						<div className=" flex flex-col gap-y-10 py-5">
							<div className="logo flex items-center gap-2">
								<div className="img h-12 w-12">
									<img
										src={Logo}
										alt=""
										className="w-full h-full object-cover"
									/>
								</div>
								<h1 className=" text-xl font-bold text-[#103034]">HEXA</h1>
							</div>
							<div className=" flex flex-col gap-y-5">
								<h1 className="text-lg font-semibold ">
									Hexa property is the future
								</h1>
								<p className="text-sm  text-slate-400">
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
									accusantium eveniet repellat ab est vero veritatis doloribus
									aliquid possimus accusamus quam cumque praesentium, unde ipsa!
									Ab cum vero aliquam fugiat? Lorem ipsum dolor sit amet
									consectetur adipisicing elit.
									<br />
									<br />
									Totam doloribus voluptas cumque facilis debitis impedit, vitae
									cupiditate ipsam repellat voluptatum quisquam nobis deleniti
									quod nam fuga assumenda ad, nisi enim. Lorem ipsum, dolor sit
									amet consectetur adipisicing elit. Temporibus, esse non qui,
									rerum quis modi quae accusantium eaque molestias ut quo eum
									provident enim dicta possimus eius quibusdam optio recusandae?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Parallax />
			<Footer />
		</div>
	);
};

export default News;
