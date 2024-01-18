import React from 'react';
import CPS from '@/components/cps.jsx';
import Navbar from '@/components/navbar.jsx';
import styles from '@/styles/Home.module.css';

export default function Home() {

  return (
      <main className={styles.main}>
      <Navbar />
        <CPS />
      </main>
  )
}