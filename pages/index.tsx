import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import {useState, useEffect} from 'react';
import { Test } from './components/Test'
// import dotenv from 'dotenv'
// dotenv.config()  // load .env file into process.env              



const Home: NextPage =  () => {
  const [data, setData] = useState()

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Sistemas distribuidos</title>
        <meta name="description" content="Sistemas distribuidos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Test
        setData={setData}
        data={data}
        />
      </main>

      <footer className={styles.footer}>
        
          <span className={styles.logo}>
            Creado por David Vargas
          </span>
        
      </footer>
    </div>
  )
}

export default Home
