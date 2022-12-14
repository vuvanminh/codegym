import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const Pagination = (props) => {

    const history = useHistory();
    const [isBottom, setIsBottom] = useState(false);
    
    const [showLoading, setShowLoading] = useState(false);
    const params = useLocation();
    const searchParams = new URLSearchParams(params.search);
    const oldPathname = localStorage.getItem('pathname');
    const currentPage = searchParams.get('page') ? parseInt(searchParams.get('page')) : 1;
    const [page, setPage] = useState(currentPage);

    useEffect(() => {
        setShowLoading(false);
        // eslint-disable-next-line
    }, [props.data]);

    useEffect(() => {
        if(oldPathname !== params.pathname){
            setPage(1);
            localStorage.setItem("pathname", params.pathname);
        }
        // eslint-disable-next-line
    }, [params.pathname]);

    useEffect(() => {
        setShowLoading(true);
        props.preparePageData(page);
        history.push('?page='+ page);
        // eslint-disable-next-line
    }, [page]);

    // Update page counter when is bottom
    useEffect(() => {
        if(isBottom){
            setPage(page + 1);
        }
        // eslint-disable-next-line
    }, [isBottom]);

    // Add scroll event
    useEffect(() => {
        localStorage.setItem("pathname", params.pathname);
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        // eslint-disable-next-line
    }, []);

    const handleScroll = () => {
        let bottom = Math.ceil(window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 100);
        if(bottom){
          setIsBottom(true);
        }else{
          setIsBottom(false);
        }
    };

    return (
        showLoading ? <div className="pagination">Loading...</div> : ""
    );
}

export default Pagination;