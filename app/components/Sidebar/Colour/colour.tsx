import React from 'react';

import { ColoursProps } from '../../../@types/types.interface';
import ColourValues from './_partials/colour.data.json';

import styles from './colour.module.css';

export const Colours = ({ handleChangeRadio }: ColoursProps) => {
    return (
        <div>
            <h2 className={styles.sidebarTitle}>Colour</h2>
            <div>
                {ColourValues.map((colour) => (
                    <label key={colour.title} className={styles.sidebarLabelsContainer}>
                        <input onChange={handleChangeRadio} value={colour.value} type="radio" name="colourFilter" />
                        <span className={styles.checkmark}></span>
                        {colour.title}
                    </label>
                ))}
            </div>
        </div>
    );
};
