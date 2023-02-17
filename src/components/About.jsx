import React from "react";
import Agents from "./Agents";
import Focus from "./Focus";
import Footer from "./Footer";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Fade from "react-reveal/Fade";

const About = () => {
	return (
		<div>
			<Navbar />
			<div className="py-20 bg-slate-100 w-full flex items-center justify-center">
				<Fade bottom>
					<h1 className="text-4xl font-bold "> About Us</h1>
				</Fade>
			</div>
			<Intro />
			<Focus />
			<Agents />
			<Footer />
		</div>
	);
};

export default About;
