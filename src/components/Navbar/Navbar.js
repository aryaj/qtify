import React from "react";
import Logo from "../Logo/Logo";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
    </nav>
  );
};

export default Navbar;
