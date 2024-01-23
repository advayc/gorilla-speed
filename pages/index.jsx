import React from 'react';
import Navbar from '@/components/navbar.jsx';
import styles from '@/styles/Home.module.css';
import AnimatedCursor from "react-animated-cursor"

export default function Home() {

  return (
      <main className={styles.main}>
    <AnimatedCursor
      innerSize={0.1}
      outerSize={30}
      color='224, 224, 224'
      outerAlpha={0.2}
      outerScale={3}
      trailingSpeed={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Navbar />
        <div className={`${styles.container} ${styles.fadeIn}`}>
          <h1 className={styles.title}>
            Welcome to Gorilla Speed
          </h1>
          <h5 className={styles.description}>
            The best way to test your typing and clicking speed
          </h5>
        </div>
      </main>
  )
}