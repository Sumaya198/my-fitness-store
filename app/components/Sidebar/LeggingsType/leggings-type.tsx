import React from 'react';
import { LeggingTypeProps } from '../../../@types/types.interface';
import LeggingTypeData from './_partials/leggingstypes.data.json';

import styles from './leggings-type.module.css';

export const LeggingsType = ({ handleChangePriceRadio }: LeggingTypeProps) => {
    return (
        <div>
            <h2 className={styles.sidebarTitle}>Collections</h2>
            <div className={styles.container}>
                {LeggingTypeData.map((leggings) => (
                    <label key={leggings.title} className={styles.sidebarLabelsContainer}>
                        <input
                            onChange={handleChangePriceRadio}
                            value={leggings.value}
                            type="radio"
                            name="typeFilter"
                        />
                        <span className={styles.checkmark}></span>
                        <p className={styles.title}>{leggings.title}</p>
                    </label>
                ))}
            </div>
        </div>
    );
};
