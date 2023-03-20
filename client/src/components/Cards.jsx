import React from "react";
import { Link } from "react-router-dom";

export default function Card () {
  return (
    <div className="card">
      <div className="card__body">
        <img src=""/>
        <h2 className="card__title">Title Here!</h2>
        <p className="card__description">Description Here</p>
      </div>
      <button className="card__button">I could be a link as "View product"</button>
    </div>
  );
}


