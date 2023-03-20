import React from "react";
import { Link } from "react-router-dom";
import categoryNamesGenerator from "../../helpers/categoryNamesGenerator";
import Card from "./Card";

export default function Home(props) {

	const { categories } = props;

   const photoLinkArray = [ "https://villa-aventura.com/wp-content/uploads/2022/12/Muziek.jpg","https://t4.ftcdn.net/jpg/02/57/33/93/240_F_257339302_LWVM6ZkukZUoVVo8CY0UHx5y283PG9RR.jpg","https://www.electronicdrumadvisor.com/wp-content/uploads/2022/03/Drumming-Glossary-and-Terms.jpg", "https://images.unsplash.com/photo-1614413970884-6dba7310bd2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3VpdGFyJTIwcGVkYWx8ZW58MHx8MHx8&w=1000&q=80"];

  const paragraphsArray = ["Don't get strung on else's, get your own strings","For all your key needs, we have the boards","What's more fun than hitting stuff - Flea", "Not satisfied with the natural, get on your game guttural"]
  console.log("categories are:", categories)

 const mappedCategories = categories.map((category, index)=> {
  return <Card category={category} paragraph={paragraphsArray[index]} image={photoLinkArray[index]}/>
 })

	return (
		<div className="h-screen">
			<header>
				<h1 className="text-5xl text-center my-16">Shop By Category</h1>
			</header>
			<div className="flex items-center flex-nowrap justify-center space-x-10 mx-10">
				{mappedCategories}
			</div>
		</div>
	);
}
