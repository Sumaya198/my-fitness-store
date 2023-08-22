import React from 'react';

import styles from './mini-page-banner.module.css';

export const MiniPageBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.bannerContent}>
                <h2>Get 50% off!</h2>
                <p>when you use our special discout code at checkout</p>
            </div>
        </div>
    );
};
