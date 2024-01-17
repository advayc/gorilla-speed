import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/navbar.jsx';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <h1 className="title">
        Welcome to Gorilla Type
      </h1>
      <h5 className="description">
        The best way to test your typing
      </h5>
      </div>
    </main>
  )
}