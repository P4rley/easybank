/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import styles from "../styles/About.module.css";
import cardImg from "../public/images/icon-online.svg";
import cardImg2 from "../public/images/icon-budgeting.svg";
import cardImg3 from "../public/images/icon-onboarding.svg";
import cardImg4 from "../public/images/icon-api.svg";

const About = () => {
  return (
    <div className={styles.container} id="about">
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Why choose Easybank?</h1>
        <p className={styles.desc}>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>

        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Image src={cardImg} alt="" />
            <h4 className={styles.cardHeading}>Online Banking</h4>
            <p className={styles.cardDesc}>
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className={styles.card}>
            <Image src={cardImg2} alt="" />
            <h4 className={styles.cardHeading}>Simple Budgeting</h4>
            <p className={styles.cardDesc}>
              See exactly where your money goes each month. Receive
              notifications when vou re close to hitting your limits.
            </p>
          </div>
          <div className={styles.card}>
            <Image src={cardImg3} alt="" />
            <h4 className={styles.cardHeading}>Fast Onboarding</h4>
            <p className={styles.cardDesc}>
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className={styles.card}>
            <Image src={cardImg4} alt="" />
            <h4 className={styles.cardHeading}>Open API</h4>
            <p className={styles.cardDesc}>
              Manage your savings, Investments pension, and much more from one
              account. Tracking your money nas never been easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
