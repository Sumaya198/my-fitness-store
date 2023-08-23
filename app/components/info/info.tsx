import React from 'react';

import styles from './info.module.css';

export const ProductInfo = ({ item }) => {
    return (
        <div className={styles.info}>
            <div className={styles['infos__container']}>
                <h1 className={styles['info__name']}>{item.title}</h1>
                <h3 className={styles['info__price']}>£{item.price}</h3>
                <h3 className={styles['avaiable_size_text']}>available in the following sizes:</h3>
                <div className={styles.sizesContainer}>
                    {item.availableSizes.map((size) => (
                        <div
                            className={size.inStock ? `${styles['inStock']}` : `${styles['not-in-stock']}`}
                            key={size.id}
                        >
                            <p className={styles.sizeName}>{size.size}</p>
                        </div>
                    ))}
                </div>

                <p className={styles.description} dangerouslySetInnerHTML={{ __html: item.description }}></p>
            </div>
        </div>
    );
};
