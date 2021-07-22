/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from "next/link";

import styles from "./NavBar.module.css"

const NavBar: React.FC = ({children}) => (
        <div>
            <nav className={styles.navigation}>
                <ul className={styles.navList}>
                    <li className={styles.navListItem}>
                        <Link href="/" as="/"><a className={styles.navListItemLink}>All posts</a></Link>
                    </li>
                    <li className={styles.navListItem}>
                        <Link href="/posts/new" as="/posts/new"><a className={styles.navListItemLink}>Add post</a></Link>
                    </li>
                </ul>
            </nav>
            {children}
        </div>
 );


export default NavBar;