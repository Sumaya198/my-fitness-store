import React from 'react';

import styles from './products.module.css';

export const Products = ({ results }) => {
    return <section className={styles.container}>{results}</section>;
};
