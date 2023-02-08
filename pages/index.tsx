import { useState } from 'react';
import type { NextPage } from 'next'
import { getEntry } from '../lib/fetch-content'
import background from '../public/panorama-2.webp';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

type MainPageContentType = {
  heading: string;
  email: string;
  phone: string;
  address: string;
  preheading: string;
}

const Home: NextPage<MainPageContentType,{}> = ({heading, email, phone, address, preheading}) => {
  return (
    <>
      <Image 
        alt="main image"
        placeholder='blur'
        quality={100}
        priority
        className={styles.img} 
        fill
        unoptimized
        src={background} />
      <div className={styles.wrapper} >
        <h1 className={styles.preHeading} data-text={preheading}>{preheading}</h1>
        <h2 className={styles.heading} data-text={heading}>{heading}</h2>
        <div className={styles.infoBlock}>
          <p data-text={address}>
            <a href={'https://yandex.com/maps/-/CCUCQThu9A'} rel="noopener noreferrer" target="_blank">
              {address}
            </a>
          </p>
          <p data-text={phone}>{phone}</p>
          <p data-text={email}>
            {email}
          </p>
        </div>
      </div>
    </>
  )
}

export default Home

export async function getStaticProps() {
  const entries = await getEntry();
  return {
    props: {
      ...(entries as MainPageContentType)
    }, // will be passed to the page component as props
  }
}