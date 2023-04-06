import React from 'react';
import styles from "./landingpage.module.scss"
import Logo from "../../assets/icons/Logo.png"

const LandingPage = () => {
    return (<div className={styles.landingPageContainer}>
        <div className={styles.sidebarContainer}>
            <div className={styles.logoContainer}>
                <img src={Logo} alt="logo" />
            </div>
            <div className={styles.verticalTextContainer}>
                <p>// THE MODERN COMPANY</p>
            </div>
            <div className={styles.codeContainer}>
                <p>001</p>
            </div>
        </div>
    </div>);
}

export default LandingPage;