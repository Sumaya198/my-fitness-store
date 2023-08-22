'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import ImageSlider from '../imageSlider/image-slider';

import styles from './pdp.module.css';
import { ProductInfo } from '../info/info';

export const PDP = ({ filterHandle }) => {
    const [activeImg, setActiveImg] = useState('');
    return (
        <div>
            <div className={styles.product}>
                <div className={styles['product__container']}>
                    <Link href="/productPage">
                        <div className={styles.path}> Back</div>
                    </Link>
                    <div className={styles['product__main']}>
                        <ImageSlider filterHandle={filterHandle} activeImg={activeImg} />
                        <ProductInfo filterHandle={filterHandle} />
                    </div>
                </div>
            </div>
        </div>
    );
};
