import React from 'react';
import Link from 'next/link';

import { Colours } from './Colour/colour';
import { LeggingsType } from './LeggingsType/leggings-type';

import styles from './sidebar.module.css';

export const Sidebar = ({ handleChangePriceRadio, handleChangeRadio }) => {
    return (
        <div className={styles.sidebar}>
            <Link href="/">Clear</Link>
            <Colours handleChangeRadio={handleChangeRadio} />
            <LeggingsType handleChangePriceRadio={handleChangePriceRadio} />
        </div>
    );
};
