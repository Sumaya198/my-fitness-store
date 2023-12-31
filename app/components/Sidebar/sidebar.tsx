import React from 'react';
import Modal from 'react-modal';

import { Colours } from './Colour/colour';
import { LeggingsType } from './LeggingsType/leggings-type';

import styles from './sidebar.module.css';
import { SizeFilter } from './Size/size-filter';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export const Sidebar = ({ handleChangeSizeRadio, handleChangePriceRadio, handleChangeRadio }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <div className={styles.mobileSidebar}>
                <button className={styles.btn} onClick={openModal}>
                    Filters
                </button>
                <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div>
                        <button onClick={closeModal}>
                            <span className={styles.cross}></span>
                        </button>
                    </div>
                    <Colours handleChangeRadio={handleChangeRadio} />
                    <LeggingsType handleChangePriceRadio={handleChangePriceRadio} />
                    <SizeFilter handleChangeSizeRadio={handleChangeSizeRadio} />
                </Modal>
            </div>
            <button className={styles['clear-button']} onClick={() => window.location.reload()}>
                Clear
            </button>
            <div className={styles.sidebar}>
                <Colours handleChangeRadio={handleChangeRadio} />
                <LeggingsType handleChangePriceRadio={handleChangePriceRadio} />
                <SizeFilter handleChangeSizeRadio={handleChangeSizeRadio} />
            </div>
        </>
    );
};
