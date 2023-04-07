import React from 'react';
import styles from "./popup.module.scss"
import ArtWork from "../../assets/images/artwork.png"
import DetailsIcon from "../../assets/icons/detailsicon.png"

const PopUp = () => {
    return (<div className={styles.revealedArtWorkContainer}>
        <img src={ArtWork} alt='revealed_image' />
        <div className={styles.details}>
            <img src={DetailsIcon} alt="" />
            <p>DATA KEY</p>
        </div>
    </div>);
}

export default PopUp;