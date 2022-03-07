import Image from "next/image";
import Link from "next/link";
import logoImg from "../public/images/logo.svg";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

import Hamburger from "../public/images/icon-hamburger.svg";
import Close from "../public/images/icon-close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link passHref href="/">
          <Image src={logoImg} alt="" />
        </Link>
      </div>

      <ul className={styles.itemLinks}>
        <li className={styles.itemLink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.itemLink}>
          <Link href="#about">About</Link>
        </li>
        <li className={styles.itemLink}>
          <Link href="/contact">Contact</Link>
        </li>
        <li className={styles.itemLink}>
          <Link href="#articles">Blog</Link>
        </li>
        <li className={styles.itemLink}>
          <Link href="/careers">Careers</Link>
        </li>
      </ul>
      {toggle && (
        <ul className={styles.itemMenuLinks}>
          <li className={styles.itemMenuLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.itemMenuLink}>
            <Link href="#about">About</Link>
          </li>
          <li className={styles.itemMenuLink}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.itemMenuLink}>
            <Link href="#articles">Blog</Link>
          </li>
          <li className={styles.itemMenuLink}>
            <Link href="/careers">Careers</Link>
          </li>
        </ul>
      )}

      {toggle ? (
        <div className={styles.hamburger} onClick={() => setToggle(false)}>
          <Image src={Hamburger} alt="" />
        </div>
      ) : (
        <div className={styles.close} onClick={() => setToggle(true)}>
          <Image src={Close} alt="" />
        </div>
      )}

      <button className={styles.button}>Request Invite</button>
    </div>
  );
};

export default Navbar;
