import React from 'react';

const Pagination = (props) => {
    //init
    const { currentPage, maxPageLimit, minPageLimit } = props;
    const totalPages = props.response.totalPages - 1;
    const data = props.response.data;

    // build page numbers list
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePrevClick = () => {
        props.onPrevClick();
    };

    const handleNextClick = () => {
        props.onNextClick();
    };

    const handlePageClick = (e) => {
        props.onPageChnage(Number(e.target.id));
    };

    const pageNumber = pages.map((page) => {
        if (page <= maxPageLimit && page > minPageLimit) {
            return (
                <li key={page} id={page} onClick={handlePageClick} className={currentPage === page ? 'active' : null}>
                    {page}
                </li>
            );
        } else {
            return null;
        }
    });

    // page ellipses
    let pageIncrementEllipses = null;

    if (pages.length > maxPageLimit) {
        pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>;
    }
    let pageDecrementEllipses = null;
    if (minPageLimit >= 1) {
        pageDecrementEllipses = <li onClick={handlePrevClick}>&hellip;</li>;
    }
    // const renderData = (data) => {

    //     return <ul>
    //         {data.map((d) => <li></li>)}
    //     </ul>;
    // };

    return (
        <div>
            <ul>
                <li>
                    <button onClick={handlePrevClick}>Prev</button>
                </li>
                {pageIncrementEllipses}
                {pageNumber}
                {pageDecrementEllipses}
                <li>
                    <button onClick={handleNextClick}>Next</button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
