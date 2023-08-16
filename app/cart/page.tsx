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
                <Link href="/">Back to Home</Link>
            </div>
            {wishlist.map((item) => (
                <div key={item.objectID}>
                    <h2>{item.title}</h2>
                    <img className={styles.cartImage} src={item.featuredMedia.src} />
                    <p>£{item.price}</p>
                </div>
            ))}
        </>
    );
}
