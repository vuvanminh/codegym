import React, { useState, useEffect } from "react";
import NoImages from "./NoImages";
import Image from "./Image";
import Modal from "./Modal";

const Gallery = props => {
  const [modalData, setModalData] = useState(false);
  const [imageItems, setImageItems] = useState([]);

  const handleModalData = (data) => {
    setModalData(data);
  };

  //const results = props.data;
  let images;
  let noImages;
  let customModal;

  useEffect(() => {
    if(props.pageprop > 1){
      setImageItems(prevItems => [...prevItems, ...props.data]);
    }else{
      setImageItems(props.data);
    }
    // eslint-disable-next-line
  }, [props.data]);
  

  // map variables to each item in fetched image array and return image component
  if (imageItems.length > 0) {
    images = imageItems.map((image,index) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image prepareModalData={handleModalData} url={url} key={index} alt={title} />;
    });
    customModal = modalData ? <Modal modalData={modalData} /> : '';
  } else {
    noImages = <NoImages />; // return 'not found' component if no images fetched
  }
  return (
    <div>
      <ul>{images}</ul>
      {noImages}
      {customModal}
    </div>
  );
};

export default Gallery;
