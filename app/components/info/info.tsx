import React from 'react';

import styles from './info.module.css';

export const ProductInfo = ({ filterHandle }) => {
    const data = filterHandle.description;
    return (
        <div className={styles.info}>
            <div className={styles['infos__container']}>
                <h1 className={styles['info__name']}>{filterHandle.title}</h1>
                <h3 className={styles['info__price']}>£{filterHandle.price}</h3>
                <div className={styles.sizesContainer}>
                    {filterHandle.availableSizes.map((size) => (
                        <div
                            className={size.inStock ? `${styles['inStock']}` : `${styles['not-in-stock']}`}
                            key={size.id}
                        >
                            <p className={styles.sizeName}>{size.size}</p>
                        </div>
                    ))}
                </div>
                <p dangerouslySetInnerHTML={{ __html: filterHandle.description }}></p>
            </div>
        </div>
    );
};
