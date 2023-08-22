'use client';

import React, { useState } from 'react';

import styles from './products.module.css';

export const Products = ({ results }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = results.slice(firstIndex, lastIndex);
    const npage = Math.ceil(results.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    const prePage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const changeCPage = (id) => {
        setCurrentPage(id);
    };

    const nextPage = () => {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <>
            <section className={styles.container}>{records}</section>
            <nav>
                <ul className={styles.pagination}>
                    <li>
                        <a className={styles.previous} onClick={prePage}>
                            Prev
                        </a>
                    </li>
                    {numbers.map((n, i) => (
                        <li>
                            <a
                                className={currentPage === n ? `${styles.number} ${styles.active}` : `${styles.number}`}
                                onClick={() => changeCPage(n)}
                            >
                                {n}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a className={styles.next} onClick={nextPage}>
                            Next
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};
