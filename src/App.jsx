import { useState } from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Shop from "./components/Shop";
import News from "./components/News";
import Contact from "./components/Contact";
import House from "./components/House";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/news" element={<News />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/house" element={<House />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
