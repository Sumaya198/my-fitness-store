import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { ProductCardProps } from '../../@types/types.interface';

import styles from './card.module.css';

export const Card = ({
    addFavourites,
    addToCart,
    availableSizes,
    objectID,
    featuredMedia,
    title,
    price,
}: ProductCardProps) => {
    return (
        <>
            <section>
                <section key={objectID} className={styles.card}>
                    <div className={styles.imgContainer}>
                        <div
                            onClick={() => addToCart({ objectID, price, title, featuredMedia })}
                            className={styles.heartIcon}
                        >
                            <AiOutlineShoppingCart />
                        </div>
                        <div
                            onClick={() => addFavourites({ objectID, price, title, featuredMedia })}
                            className={styles.heartIcon}
                        >
                            <FiHeart />
                        </div>

                        <img className={styles.media} src={featuredMedia.src} alt="leggings" />
                    </div>

                    <div className={styles.cardDetails}>
                        <h3 className={styles.cardTitle}>{title}</h3>
                        <section className={styles.cardPrice}>
                            <h5>£{price}</h5>
                        </section>
                        <div className={styles.sizesContainer}>
                            {availableSizes.map((size) => (
                                <div
                                    className={size.inStock ? `${styles['inStock']}` : `${styles['not-in-stock']}`}
                                    key={size.id}
                                >
                                    {size.size}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
};
