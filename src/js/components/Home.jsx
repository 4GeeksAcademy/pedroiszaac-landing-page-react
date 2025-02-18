import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "./Footer";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container text-center mt-5">
				<div className="row">
					<div className="col">
						<Card
						imagen={"https://adselams.com/wp-content/uploads/2024/09/graphic-design-page.webp"}
						/>
					</div>
					<div className="col">
						<Card 
						imagen={"https://www.sinclair.edu/www/assets/Image/Hom-Aca-AcaDiv-LCS-Aap%26Des/Design.jpg"}
						/>
					</div>
					<div className="col">
						<Card 
						imagen={"https://www.udacity.com/_next/image?url=https%3A%2F%2Fvideo.udacity-data.com%2Ftopher%2F2024%2FOctober%2F67098188_cd0027%2Fcd0027.jpg&w=3840&q=75"}
						/>
					</div>
					<div className="col">
						<Card 
						imagen={"https://shakuro.com/_next/image?url=https%3A%2F%2Fblog.cgify.com%2Fwp-content%2Fuploads%2F2020%2F01%2Fmeaning-of-design.jpg&w=2560&q=98"}
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;