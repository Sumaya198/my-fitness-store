import React from 'react';
import { FiHeart } from 'react-icons/fi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Modal from 'react-modal';
import { ProductCardProps } from '../../@types/types.interface';

import styles from './card.module.css';
import Link from 'next/link';

export const Card = ({
    addFavourites,
    addToCart,
    availableSizes,
    objectID,
    featuredMedia,
    title,
    price,
    handle,
}: ProductCardProps) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <section>
                <section key={objectID} className={styles.card}>
                    <div className={styles.imgContainer}>
                        <div
                            onClick={() => addToCart({ objectID, price, title, featuredMedia })}
                            className={styles.shoppingCartIcon}
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

                        <Link href={`/productDP/${handle}`}>
                            <button>View Product</button>
                        </Link>
                    </div>
                </section>
            </section>
        </>
    );
};
