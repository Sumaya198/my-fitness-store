import React, { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';

import styles from './image-slider.module.css';

const ImageSlider = ({ item, activeImg }) => {
    const [active, setActive] = useState(0);
    return (
        <div className={styles.swiper}>
            <div className={styles['swiper_active']}>
                <ReactImageMagnify
                    {...{
                        smallImage: {
                            alt: item.title,
                            isFluidWidth: true,
                            src: item.media[active].src,
                        },
                        largeImage: {
                            src: item.media[active].src,
                            width: 1200,
                            height: 1800,
                        },
                        enlargedImageContainerDimensions: {
                            width: '85%',
                            height: '85%',
                        },
                    }}
                />
            </div>
            <div className={styles['swiper__list']}>
                {item.media.map((image, i) => (
                    <div
                        className={`${styles['swiper__list_item']} ${i == active && styles.active}`}
                        key={i}
                        onMouseOver={() => setActive(i)}
                    >
                        <img src={image.src} alt={item.title} key={i} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
