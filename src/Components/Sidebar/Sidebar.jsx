import React from 'react';
import styles from "./sidebar.module.scss"

const Sidebar = () => {
    return (<div className={styles.sidebarContainer}>
        <div className={styles.verticalTextContainer}>
            <p>// THE MODERN COMPANY</p>
        </div>
        <div className={styles.codeContainer}>
            <p>001</p>
        </div>
    </div>);
}

export default Sidebar;