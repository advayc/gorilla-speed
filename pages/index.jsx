import React from 'react';
import CPS from '@/components/cps.jsx';
import Navbar from '@/components/navbar.jsx';
import styles from '@/styles/Home.module.css';

export default function Home() {

  return (
      <main className={styles.main}>
      <Navbar />
        <div className={`${styles.container} ${styles.fadeIn}`}>
          <h1 className={styles.title}>
            Welcome to Gorilla Speed
          </h1>
          <h5 className={styles.description}>
            The best way to test your typing and clicking speed
          </h5>
        </div>
        <Footer />
      </main>
  )
}