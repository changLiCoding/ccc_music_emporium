import React from "react";
import { Link } from "react-router-dom";


export default function Home(props) {
  const { categories } = props;

  return (
    <div>
      <div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">I am keyboard</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img
            src="https://t4.ftcdn.net/jpg/02/57/33/93/240_F_257339302_LWVM6ZkukZUoVVo8CY0UHx5y283PG9RR.jpg"
						alt="Keyboard"
          />
        </figure>
      </div>
			<div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">I am guitar</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img
            src="https://villa-aventura.com/wp-content/uploads/2022/12/Muziek.jpg"
            alt="Guitar"
          />
        </figure>
      </div>
			<div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">I am drums</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img
            src="https://www.electronicdrumadvisor.com/wp-content/uploads/2022/03/Drumming-Glossary-and-Terms.jpg"
            alt="Drums"
          />
        </figure>
      </div>
			<div class="card w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">I am things</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1614413970884-6dba7310bd2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3VpdGFyJTIwcGVkYWx8ZW58MHx8MHx8&w=1000&q=80"
            alt="Things"
          />
        </figure>
      </div>
    <div>
        HOME PAGE
        <div>
          <ul>
            {categories &&
              categories.map((category) => {
                const linkUrl = `/categories/${category.name}`;
                return (
                  <li key={category.id}>
                    <Link to={`/categories/${category.name}`}>{category.name.toUpperCase()}</Link>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </div>
  );
}
