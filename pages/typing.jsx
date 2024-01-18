import React from 'react';
import WPM from '@/components/wpm.jsx';
import Navbar from '@/components/navbar.jsx';
import styles from '@/styles/Home.module.css';

export default function Home() {

  return (
      <main className={styles.main}>
      <Navbar />
        <WPM />
      </main>
  )
}