'use client';

import React from 'react';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { Navigationprops } from '../../@types/types.interface';

import styles from './navigation.module.css';

export const Navigation = ({ handleChange, query }: Navigationprops) => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.wrapper}>
                <input
                    type="text"
                    onChange={handleChange}
                    value={query}
                    className={styles.search}
                    placeholder="Search..."
                />
            </div>
            <div className={styles.profileContainer}>
                <Link className={styles.navIcon} href="/wishlistPage">
                    <FiHeart />
                </Link>
                <Link className={styles.navIcon} href="/cart">
                    <AiOutlineShoppingCart />
                </Link>
            </div>
        </nav>
    );
};
