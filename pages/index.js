import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from '../components/logo.js'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dominik Zaczek - Front-End Developer with UX/UI experience</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Logo />
      <h2>Dominik Zaczek: Front-End Developer with Back-End and UX/UI Experience</h2>

      <ul>
        <li><b>New Music Institute:</b> Full-Stack (HTML, CSS, JS, ExpressJS, ReactJS, Heroku)</li>
        <li><b>Glendower Parents' Association:</b> Front-End (HTML, CSS, JS) </li>
        <li><b>TutorUp (concept):</b> Full-Stack (Firebase + ReactJS)</li>
        <li><b>This Portfolio:</b> Full-Stack (HTML, CSS, JS, NextJS, Material UI, Vercel)</li>
      </ul>
    </div>
  )
}
