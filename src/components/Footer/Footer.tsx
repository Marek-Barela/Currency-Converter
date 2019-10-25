import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  const { footer } = styles;
  return (
    <footer className={footer}>
      <p>Application created by Marek Bareła</p>
    </footer>
  );
};

export default Footer;
