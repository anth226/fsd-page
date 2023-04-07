import React from 'react'
import styles from "./navbar.module.scss"

import Logo from "../../assets/icons/Logo.png"
import CrossIcon from "../../assets/icons/crossicon.png"

const Navbar = () => {
    return (<div className={styles.navbarContainer}>
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
    </div>);
}

export default Navbar;