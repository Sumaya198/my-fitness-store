import React from 'react';
import Link from 'next/link';

import styles from './homepage.module.css';

export const Homepage = () => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.imgWrapper}>
                    <img src="https://images.pexels.com/photos/3822220/pexels-photo-3822220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
                </div>
                <div className={styles.banner}>
                    <h1>Did someone say leggings!</h1>

                    <Link href="/productPage">
                        <button className={styles.link}>Shop Now</button>
                    </Link>
                </div>
            </header>
        </div>
    );
};
