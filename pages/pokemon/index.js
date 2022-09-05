import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon | Home</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          POKEMON HOME PAGE
        </h1>
        <p className={styles.description}>Coloca en la url ".../pokemonId" para ir a tu pokemon favorito</p>
        <div className={styles.grid}>
          <Image loader={({src})=>src} height="200" width="200" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png"}/>
        </div>
      </main>
    </div>
  )
}
