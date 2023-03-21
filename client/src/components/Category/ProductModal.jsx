import React from "react";

export default function ProductModal(props) {
  const { product, isModalOpen, closeModal } = props;

  const handleClick = () => {

  }

  return (
    <div className="custom-modal" onClick={closeModal}>
      
    <div className="card card-compact w-full bg-base-100 shadow-xl" onClick={(e)=> e.stopPropagation()}>
      <figure>
        <img
          src={product.image_url}
          alt={product.model}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
        <div className="card-actions justify-start">
          <button onClick={closeModal} className="btn btn-primary">X</button>
        </div>
      </div>
    </div>

    </div>
  );
}
