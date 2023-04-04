import React from "react";
import "../styles/css/category.css";

const Category = ({ image, text }) => {
  return (
    <a className="card">
      <img
        src={image}
        alt={text}
        class="card__img"
      />
      <span class="card__footer">
        <span>{text}</span>
      </span>
      <span class="card__action">
        <svg viewBox="0 0 448 512" title="play">
          <path fill="#196928" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
        </svg>
      </span>
    </a>
  );
};

export default Category;
