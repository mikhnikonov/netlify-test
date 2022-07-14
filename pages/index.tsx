import type { NextPage } from 'next'
import { loadCats } from '../lib/fetch-cats'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = ({facts}: any) => {
  return (
    <>
      <h1 className={styles.card}>Site is under maintenance</h1>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const facts = await loadCats();
  return {
    props: {
      facts
    }, // will be passed to the page component as props
  }
}