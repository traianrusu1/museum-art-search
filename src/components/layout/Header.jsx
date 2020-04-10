import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import styles from './Header.module.css';


const Header = () => {
	return <nav className={styles.header}> <a href='./'><FontAwesomeIcon icon={faPalette} size="2x"/> <span className={styles.headerTitle}> Museum Art </span></a></nav>;
};

export default Header;
