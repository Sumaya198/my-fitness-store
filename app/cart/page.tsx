'use client';

import React, { useState, useEffect } from 'react';

import styles from '../components/Card/card.module.css';
import Link from 'next/link';

export default function CartPage() {
    const wishlist = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('myWishlist')) : '';

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(wishlist);
    }, []);

    if (wishlist === null) return <>cart is empty</>;

    return (
        <>
            <div>
                <Link href="/productPage">Back to Home</Link>
            </div>
            <div className={styles.wishlistContainer}>
                {data.map((item) => (
                    <section key={item.objectID} className={styles.wishlistCard}>
                        <div key={item.objectID}>
                            <img className={styles.media} src={item.featuredMedia.src} />
                        </div>
                        <h2 className={styles.cardTitle}>{item.title}</h2>
                        <section className={styles.cardPrice}>
                            <p>£{item.price}</p>
                        </section>
                        <button>View Product</button>
                    </section>
                ))}
            </div>
        </>
    );
}
