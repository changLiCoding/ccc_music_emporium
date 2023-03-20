import React from "react";
import { Link } from "react-router-dom";


export default function Home(props) {
  const { categories } = props;

  return (
    <div class="flex flex-nowrap">
      <div class="card w-96 bg-base-100 shadow-xl hover:bg-sky-700"><Link to={`/categories/keyboards`}>
        <div class="card-body">
          <h2 class="card-title">I am keyboard</h2>
          <p>All the key needs we have the right boards</p>
        </div>
        <figure>
          <img
            src="https://t4.ftcdn.net/jpg/02/57/33/93/240_F_257339302_LWVM6ZkukZUoVVo8CY0UHx5y283PG9RR.jpg"
						alt="Keyboard"
          />
        </figure>
					</Link>
      </div>
			<div class="card w-96 bg-base-100 shadow-xl"><Link to={`/categories/guitars`}>
        <div class="card-body">
          <h2 class="card-title">I am guitar</h2>
          <p>Don't get strung on else's get your strings here</p>
        </div>
        <figure>
          <img
            src="https://villa-aventura.com/wp-content/uploads/2022/12/Muziek.jpg"
            alt="Guitar"
          />
        </figure>
				</Link>
      </div>
			<div class="card w-96 bg-base-100 shadow-xl"><Link to={`/categories/drums`}>
        <div class="card-body">
          <h2 class="card-title">I am drums</h2>
          <p>"What's more fun than hitting stuff" - Flea</p>
        </div>
        <figure>
          <img
            src="https://www.electronicdrumadvisor.com/wp-content/uploads/2022/03/Drumming-Glossary-and-Terms.jpg"
            alt="Drums"
          />
        </figure>
				</Link>
      </div>
			<div class="card w-96 bg-base-100 shadow-xl"><Link to={`/categories/amps & pedals`}>
        <div class="card-body">
          <h2 class="card-title">I am things</h2>
          <p>Not satisfied with the natural, get on your game guttural</p>
        </div>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1614413970884-6dba7310bd2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3VpdGFyJTIwcGVkYWx8ZW58MHx8MHx8&w=1000&q=80"
            alt="Things"
          />
        </figure>
				</Link>
      </div>
    </div>
  );
}
