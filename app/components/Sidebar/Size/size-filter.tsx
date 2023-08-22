import SizeTypeData from './_partials/sizetype.data.json';

import styles from './size-filter.module.css';

export const SizeFilter = ({ handleChangeSizeRadio }) => {
    return (
        <div>
            <h2 className={styles.sidebarTitle}>Size Filter</h2>
            <div className={styles.container}>
                {SizeTypeData.map((size) => (
                    <label className={styles.sidebarLabelsContainer}>
                        <input onChange={handleChangeSizeRadio} value={size.value} type="radio" name="sizeFilter" />
                        <span className={styles.checkmark}></span>
                        <p className={styles.title}>{size.title}</p>
                    </label>
                ))}
            </div>
        </div>
    );
};
