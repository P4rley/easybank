/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import styles from "../styles/Articles.module.css";

import imgArticles from "../public/images/image-currency.jpg";
import imgArticles2 from "../public/images/image-restaurant.jpg";
import imgArticles3 from "../public/images/image-plane.jpg";
import imgArticles4 from "../public/images/image-confetti.jpg";
import Image from "next/image";

const Articles = () => {
  return (
    <div className={styles.container} id="articles">
      <h1 className={styles.heading}>Latest Articles</h1>
      <div className={styles.cards}>
        <div className={styles.cardItem}>
          <Link passHref href="/articles">
            <div>
              <div className={styles.cardImg}>
                <Image src={imgArticles} layout="fill" alt="" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardTitle}>By Claire Robinson</span>
                <h4 className={styles.cardHeading}>
                  Recieve money in any currency with no fees
                </h4>
                <p className={styles.cardDesc}>
                  The world is getting smaller and were becoming more mobile. So
                  why should you forced to only receive money in a single ...
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.cardItem}>
          <Link passHref href="/articles">
            <div>
              <div className={styles.cardImg}>
                <Image src={imgArticles2} layout="fill" alt="" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardTitle}>By Wilson Hutton</span>
                <h4 className={styles.cardHeading}>
                  Treat yourself without worrying about money
                </h4>
                <p className={styles.cardDesc}>
                  Our simple budgeting feature allows you to seperate out your
                  spending and set realistic limits each month. That means you
                  ...
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className={styles.cardItem}>
          <Link passHref href="/articles">
            <div>
              <div className={styles.cardImg}>
                <Image src={imgArticles3} layout="fill" alt="" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardTitle}>By Wilson Hutton</span>
                <h4 className={styles.cardHeading}>
                  Take your Easybank card wherever you go
                </h4>
                <p className={styles.cardDesc}>
                  We want you to enjoy your travels. This is wgy we don't charge
                  any fees on purchases while you're abroad. We'll even show you
                  ...
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className={styles.cardItem}>
          <Link passHref href="/articles">
            <div>
              <div className={styles.cardImg}>
                <Image src={imgArticles4} layout="fill" alt="" />
              </div>
              <div className={styles.cardContent}>
                <span className={styles.cardTitle}>By Claire Robinson</span>
                <h4 className={styles.cardHeading}>
                  Our invite-only Beta accounts are now live!
                </h4>
                <p className={styles.cardDesc}>
                  After a lot of hard work ny the whole team, we're excited to
                  launch our closed beta. It's easy to request an invite through
                  the site ...
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Articles;
