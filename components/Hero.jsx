import Image from "next/image";
import styles from "../styles/Hero.module.css";
import heroImg from "../public/images/bg-intro-desktop.svg";
import heroMock from "../public/images/image-mockups.png";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.heading}>Next generation digital banking</h1>
        <p className={styles.desc}>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className={styles.button}>Request Invite</button>
      </div>
      <div className={styles.picSection}>
        <div className={styles.right}>
          <Image src={heroImg} layout="fill" alt="" />
        </div>

        <div className={styles.heroMockups}>
          <Image src={heroMock} layout="fill" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
