import React, { useContext, useEffect, useState } from "react";
import { PhotoContext } from "../context/PhotoContext";
import Gallery from "./Gallery";
import Pagination from "./Pagination";
import Loader from "./Loader";

const Container = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if(page !== 0){
      runSearch(searchTerm, page);
    }
    // eslint-disable-next-line
  }, [searchTerm, page]);

  const handlePageData = (pageData) => {
    setPage(pageData);
  };

  return (
    <div className="photo-container">
      {loading ? <Loader /> : <Gallery data={images} pageprop={page} />}
      <Pagination preparePageData={handlePageData} data={images} />
    </div>
  );
};

export default Container;
