import React from "react";

//include images into your bundle
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";

//create your first component
const Home = () => {
	const cardsArray = [
		{
			title: "Card 1",
			text: "Lorem ipsum dolor sit amet, consectetur adipsicing elit. Ipsa, ipsam, eligendi, in quo sunt pssimus non incidunt odit vero asiquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repllat",
			image: "https://via.placeholder.com/500x325"
		},
		{
			title: "Card 2",
			text: "Lorem ipsum dolor sit amet, consectetur adipsicing elit. Ipsa, ipsam, eligendi, in quo sunt pssimus non incidunt odit vero asiquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repllat",
			image: "https://via.placeholder.com/500x325"
		},
		{
			title: "Card 3",
			text: "Lorem ipsum dolor sit amet, consectetur adipsicing elit. Ipsa, ipsam, eligendi, in quo sunt pssimus non incidunt odit vero asiquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repllat",
			image: "https://via.placeholder.com/500x325"
		},
		{
			title: "Card 4",
			text: "Lorem ipsum dolor sit amet, consectetur adipsicing elit. Ipsa, ipsam, eligendi, in quo sunt pssimus non incidunt odit vero asiquid similique quaerat nam nobis illo aspernatur vitae fugiat numquam repllat",
			image: "https://via.placeholder.com/500x325"
		},

	]
	return (

		<div className="text-center">
			<Navbar></Navbar>
			<Jumbotron></Jumbotron>
			
			<div className="d-flex justify-content-center flex-wrap">
			
			{cardsArray.map((card, index) => (
			 (
					<Cards
					key={index}
					title={card.title}
					text={card.text}
					image={card.image}
					/>
				)
			))}
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Home;