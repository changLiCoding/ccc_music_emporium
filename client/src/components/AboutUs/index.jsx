import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";

export default function AboutUs() {
	const { products } = useContext(ProductContext);
	console.log(products);
	return (
		<div className='py-16'>
			<div className='container m-auto px-6 text-gray-600 md:px-12 xl:px-6'>
				<div className='space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12'>
					<div className='md:5/12 lg:w-5/12'>
						<img
							src='https://cdn.shopify.com/s/files/1/1201/9020/products/PXL_20220509_234448770.PORTRAIT_1024x1024.jpg?v=1652140130'
							alt='strore'
							loading='lazy'
							width=''
							height=''
						/>
					</div>
					<div className='md:7/12 lg:w-6/12'>
						<h2 className='text-2xl text-gray-900 font-bold md:text-4xl'>
							CCC Music Emporium
						</h2>
						<h3 className='text-xl text-gray-900 font-bold md:text-3xl'>
							A Place Thats Pretty Cool
						</h3>
						<p className='mt-6 text-gray-600'>
							They say you only come to peace with yourself when you know
							yourself better than those around you. Derick knew nothing about
							this. He thought he had found peace but this was an illusion as he
							was about to find out with an unexpected occurrence that he
							actually knew nothing about himself.
						</p>
						<p className='mt-4 text-gray-600'>
							{" "}
							The headphones were on. They had been utilized on purpose. She
							could hear her mom yelling in the background, but couldn't make
							out exactly what the yelling was about. That was exactly why she
							had put them on. She knew her mom would enter her room at any
							minute, and she could pretend that she hadn't heard any of the
							previous yelling.
						</p>
						<p className='mt-4 text-gray-600'>
							{" "}
							Sleep deprivation causes all sorts of challenges and problems.
							When one doesn`t get enough sleep one`s mind doesn`t work clearly.
							Studies have shown that after staying awake for 24 hours one`s
							ability to do simple math is greatly impaired. Driving tired has
							been shown to be as bad as driving drunk. Moods change,
							depression, anxiety, and mania can be induced by lack of sleep. As
							much as people try to do without enough sleep it is a wonder more
							crazy things don`t happen in this world.
						</p>
						<div className='flex justify-evenly mt-12'>
							<Link to='/'>
								<button className='btn btn-primary'>Browse Products</button>
							</Link>
							<Link to='/contact'>
								<button className='btn btn-primary'>See Store Details</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
