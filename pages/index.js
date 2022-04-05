import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninjas | Home</title>
        <meta name="keywords" content="Ninjas" />
      </Head>    
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, explicabo corrupti expedita architecto perferendis veniam sunt fuga dignissimos nobis culpa impedit ipsum, blanditiis adipisci, quam eius hic. Cumque, sequi reprehenderit!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, explicabo corrupti expedita architecto perferendis veniam sunt fuga dignissimos nobis culpa impedit ipsum, blanditiis adipisci, quam eius hic. Cumque, sequi reprehenderit!</p>
        <Link href='/ninja'><a className={styles.btn}>See ninja listing</a></Link>
      </div>
    </>
  )
}
