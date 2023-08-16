import React from 'react';

import { ColoursProps } from '../../../@types/types.interface';

import styles from './colour.module.css';

export const Colours = ({ handleChangeRadio }: ColoursProps) => {
    return (
        <div>
            <h2 className={styles.sidebarTitle}>Colour</h2>
            <div>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Black" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Black
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Navy" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Navy
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Moonstone Blue" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Moonstone Blue
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="White" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>White
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Yellow" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Yellow
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Orange" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Orange
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Green" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Green
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Teal" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Teal
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Grey" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Charcoal Grey
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input
                        onChange={handleChangeRadio}
                        value={`Paige Pink` && `Polka Pink`}
                        type="radio"
                        name="colourFilter"
                    />
                    <span className={styles.checkmark}></span>Pink
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Biscotti Brown" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Brown
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Burgundy Marl" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Burgundy
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Pink/Red" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Red
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangeRadio} value="Purplee" type="radio" name="colourFilter" />
                    <span className={styles.checkmark}></span>Purple
                </label>
            </div>
        </div>
    );
};
