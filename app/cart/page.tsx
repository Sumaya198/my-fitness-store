'use client';

import React from 'react';

import styles from '../components/Card/card.module.css';
import Link from 'next/link';

export default function CartPage() {
    const wishlist = JSON.parse(localStorage.getItem('myCart'));

    if (wishlist === null) return <>cart is empty</>;

    return (
        <>
            <div>
                <Link href="/productPage">Back to Home</Link>
            </div>
            <div className={styles.wishlistContainer}>
                {wishlist.map((item) => (
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
