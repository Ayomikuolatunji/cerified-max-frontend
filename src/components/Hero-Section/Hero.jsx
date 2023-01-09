// Import the React library
import React from "react";

// Import the hero image
import "../../assets/hero-image.png";

// Import the hero.css file
import "./hero.css";

// Create a component that returns the HTML of the hero section
export const Hero = () => (
	<div className="hero">
		<div>
			<div className="hero-content">
				<h1>Lorem Ipsum </h1>
				<p>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercitation
					veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
					ullamco est sit aliqua dolor do amet sint. Velit officia consequat
					duis enim velit mollit. Exercitation veniam consequat sunt nostrud
					amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do
					amet sint. Velit officia consequat duis enim velit mollit.
					Exercitation veniam consequat sunt nostrud amet.
				</p>
				<button className="hero-button">Get Started</button>
			</div>
			<div className="hero-image">
				<img
					src={require("../../assets/hero-image.png")}
					alt="hero section banner"
				/>
			</div>
		</div>
		<div className="banner-footer">
			<h2>Lorem ipsim amet minim mollit non <br></br> deserunt ullamco</h2>
			<p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
		</div>
	</div>
);
