import React from 'react';
import { LeggingTypeProps } from '../../../@types/types.interface';
import styles from './leggings-type.module.css';

export const LeggingsType = ({ handleChangePriceRadio }: LeggingTypeProps) => {
    return (
        <div>
            <h2 className={styles.sidebarTitle}>Leggings Collection</h2>
            <div>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangePriceRadio} value="Speed Leggings" type="radio" name="typeFilter" />
                    <span className={styles.checkmark}></span>Speed
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input
                        onChange={handleChangePriceRadio}
                        value="Adapt Camo Seamless Leggings"
                        type="radio"
                        name="typeFilter"
                    />
                    <span className={styles.checkmark}></span>Adapt
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangePriceRadio} value="Pulse Leggings" type="radio" name="typeFilter" />
                    <span className={styles.checkmark}></span>Pulse
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input
                        onChange={handleChangePriceRadio}
                        value="Vital Seamless 2.0 Leggings"
                        type="radio"
                        name="typeFilter"
                    />
                    <span className={styles.checkmark}></span>Vital
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangePriceRadio} value="Training Leggings" type="radio" name="typeFilter" />
                    <span className={styles.checkmark}></span>Training
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input
                        onChange={handleChangePriceRadio}
                        value="Training Cropped Leggings"
                        type="radio"
                        name="typeFilter"
                    />
                    <span className={styles.checkmark}></span>Cropped
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input
                        onChange={handleChangePriceRadio}
                        value="Energy Seamless Leggings"
                        type="radio"
                        name="typeFilter"
                    />
                    <span className={styles.checkmark}></span>Seamless
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input
                        onChange={handleChangePriceRadio}
                        value="Flex High Waisted Leggings"
                        type="radio"
                        name="typeFilter"
                    />
                    <span className={styles.checkmark}></span>High Waisted
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input
                        onChange={handleChangePriceRadio}
                        value="KK Fit 7/8  Leggings"
                        type="radio"
                        name="typeFilter"
                    />
                    <span className={styles.checkmark}></span>KK Fit
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangePriceRadio} value="Studio Leggings" type="radio" name="typeFilter" />
                    <span className={styles.checkmark}></span>Studio
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input
                        onChange={handleChangePriceRadio}
                        value="Zone Graphic Leggings"
                        type="radio"
                        name="typeFilter"
                    />
                    <span className={styles.checkmark}></span>Graphic
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input onChange={handleChangePriceRadio} value="Vision Leggings" type="radio" name="typeFilter" />
                    <span className={styles.checkmark}></span>Vision
                </label>
                <label className={styles.sidebarLabelsContainer}>
                    <input
                        onChange={handleChangePriceRadio}
                        value="GS Power Support Leggings"
                        type="radio"
                        name="typeFilter"
                    />
                    <span className={styles.checkmark}></span>Power Support
                </label>
            </div>
        </div>
    );
};
