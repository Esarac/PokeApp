import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          WELCOME TO THE POKEMON HOME PAGE
        </h1>
        <p className={styles.description}>Select one of our services</p>
        <div className={styles.grid}>
          <Image alt='pokemon' loader={({src})=>src} height="200" width="200" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png"}/>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/pokemon">
              <div>
                <h2>Pokedex &rarr;</h2>
                <p>Look at all the pokemons from the Pokemon universe.</p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}