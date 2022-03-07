import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Footer.module.css";

import footerLogo from "../public/images/logo-white.svg";
import icon from "../public/images/icon-facebook.svg";
import icon2 from "../public/images/icon-youtube.svg";
import icon3 from "../public/images/icon-twitter.svg";
import icon4 from "../public/images/icon-pinterest.svg";
import icon5 from "../public/images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerLinks}>
        <div className={styles.footerLogo}>
          <Image src={footerLogo} alt="" />
        </div>
        <div className={styles.footerSocials}>
          <div className={styles.footerSocial}>
            <Link passHref href="/">
              <Image src={icon} alt="" />
            </Link>
          </div>
          <div className={styles.footerSocial}>
            <Link passHref href="/">
              <Image src={icon2} alt="" />
            </Link>
          </div>
          <div className={styles.footerSocial}>
            <Link passHref href="/">
              <Image src={icon3} alt="" />
            </Link>
          </div>
          <div className={styles.footerSocial}>
            <Link passHref href="/">
              <Image src={icon4} alt="" />
            </Link>
          </div>
          <div className={styles.footerSocial}>
            <Link passHref href="/">
              <Image src={icon5} alt="" />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.footerLinks}>
        <div className={styles.footerLink}>
          <Link href="/">About Us</Link>
        </div>
        <div className={styles.footerLink}>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.footerLink}>
          <Link href="#articles">Blog</Link>
        </div>
      </div>

      <div className={styles.footerLinks}>
        <div className={styles.footerLink}>
          <Link href="/careers">Careers</Link>
        </div>
        <div className={styles.footerLink}>
          <Link href="/support">Support</Link>
        </div>
        <div className={styles.footerLink}>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
      </div>

      <div className={styles.footerLinksButton}>
        <button>Request Invite</button>
        <p className={styles.footerRights}>© Easybank. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
