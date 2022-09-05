import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css'

export default function PageNotFound(props){
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon | 404</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          POKEMON NOT FOUND
        </h1>
        <div className={styles.grid}>
            <Image loader={({src})=>src} height="200" width="200" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png"}/>
        </div>
      </main>
    </div>
  );
};