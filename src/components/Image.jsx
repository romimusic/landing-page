import React from "react";
import photo from "../assets/image-header-mobile.jpg";
import "../styles/Image.scss";

const Image = () => {
  return (
    <figure className="Image__container">
      <img src={photo} alt="WIP Tech Team" />
    </figure>
  );
};

export default Image;
