import React from 'react';
import styles from "./landingpage.module.scss"
import Logo from "../../assets/icons/Logo.png"
import CrossIcon from "../../assets/icons/crossicon.png"
import ActionBtnIcon from '../../assets/icons/actiobtnico.png'

const LandingPage = () => {
    return (<div className={styles.landingPageContainer}>
        <div className={styles.navbarContainer}>
            <div className={styles.navbarLeftSide}>
                <div className={styles.cornerIconsContainer}>
                    <img src={Logo} alt="logo" />
                </div>
                <p>ENTRY TEST_</p>
            </div>
            <div className={styles.navbarRightSide}>
                <p className={styles.dullText}>C:\EXERCISE\PROGRAMS\01.EXE</p>
                <div className={styles.cornerIconsContainer}>
                    <img src={CrossIcon} alt="logo" />
                </div>
            </div>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.sidebarContainer}>
                <div className={styles.verticalTextContainer}>
                    <p>// THE MODERN COMPANY</p>
                </div>
                <div className={styles.codeContainer}>
                    <p>001</p>
                </div>
            </div>
            <div className={styles.mainContent}>
                <button className={styles.actioBtn}>
                    <img src={ActionBtnIcon} />
                    <p>REVEAL NOW</p>
                </button>
                <div className={styles.footer}>
                    <p> © 2023 TPW - ALL RIGHTS RESERVED.</p>
                </div>
            </div>
        </div>

    </div>);
}

export default LandingPage;