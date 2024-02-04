import React from 'react';
import WPM from '@/components/typing/wpm.jsx';
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
      outerScale={2}
      trailingSpeed={5}
      showSystemCursor='true'
    />
      <Navbar />
        <WPM />
      </main>
  )
}