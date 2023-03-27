import React, { useContext } from "react";

import Card from "./Card";
import { CategoryNameContext } from "../../contexts/CategoryNameContext";

export default function Home() {
	const { categoryNames } = useContext(CategoryNameContext);
	const photoLinkArray = [
		"https://villa-aventura.com/wp-content/uploads/2022/12/Muziek.jpg",
		"https://t4.ftcdn.net/jpg/02/57/33/93/240_F_257339302_LWVM6ZkukZUoVVo8CY0UHx5y283PG9RR.jpg",
		"https://www.electronicdrumadvisor.com/wp-content/uploads/2022/03/Drumming-Glossary-and-Terms.jpg",
		"https://images.unsplash.com/photo-1614413970884-6dba7310bd2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3VpdGFyJTIwcGVkYWx8ZW58MHx8MHx8&w=1000&q=80",
	];

	const paragraphsArray = [
		"Don't get strung on someone else's, get your own strings!",
		"For all your key needs, we have the boards.",
		"'What's more fun than hitting stuff?' - Flea",
		"Not satisfied with the natural, get on your game guttural.",
	];

	const mappedCategories = categoryNames.map((category, index) => {
		return (
			<div
				key={index}
				className="justify-self-center w-full md:w-3/4 lg:w-9/12 xl:w-10/12 mb-8"
			>
				<Card
					category={category}
					paragraph={paragraphsArray[index]}
					image={photoLinkArray[index]}
				/>
			</div>
		);
	});

	return (
		<div className="items-stretch min-h-screen">
			<div
				className="hero h-96"
				style={{
					backgroundImage: `url("https://www.musicstore.com/INTERSHOP/static/WFS/MusicStore-Site/MusicStoreShop/MusicStore-MusicStoreShop/en_US/static-pages/Abteilungsinfos/Header/EGIT_Header.jpg")`,
				}}
			>
				<div className="hero-overlay bg-opacity-70"></div>
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-4xl">
						<h1 className="mb-8 text-6xl font-bold [text-shadow:_0_5px_0_rgb(0_0_0_/_60%)]">
							Welcome to CCC Music Emporium!
						</h1>
						<p className="mb-5 text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_80%)]">
							A place that has instruments and other things that you plug the
							instruments in to. Do you like instruments? Cool! We do too. Take
							a look below and see if there's anything you'd like to buy.
						</p>
						<p className="mb-5 text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_80%)]">
							Please buy something. Just do it, don't even think about it.
						</p>
						{/* <button className="btn btn-primary">Get Started</button> */}
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-4xl text-center font-bold my-16 underline">
					Shop By Category
				</h1>
			</div>
			<div className="self-stretch flex-wrap justify-center mx-10 lg:mx-20 mb-10 grid grid-cols-2 gap-8">
				{mappedCategories}
			</div>
		</div>
	);
}
