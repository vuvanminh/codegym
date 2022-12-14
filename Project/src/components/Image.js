import React, { useState } from "react";

const Image = ({ url, alt, prepareModalData }) => {

  const [isHover, setIsHover] = useState(false);

  const hoverEfect = {
    opacity: isHover ? '1' : '0'
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleImageModal = (e) => {
    let currentImg = e.target.attributes.getNamedItem('src').value;
    let currentImgAlt = e.target.attributes.getNamedItem('alt').value;
    let bigImg = currentImg.replace('_m.','_b.');
    let imgData = {
      "image_big": bigImg,
      "image_title": currentImgAlt
    }
    prepareModalData(imgData);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img onClick={handleImageModal} src={url} alt={alt} />
      <div style={hoverEfect} className="title">{alt}</div>
    </li>
  )
};

export default Image;
