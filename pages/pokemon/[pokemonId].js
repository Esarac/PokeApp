import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Pokemon({ pokemon }) {
  const router = useRouter()
  const { pokemonId } = router.query

  const backEnabled = (pokemon.id > 1)
  const nextEnabled = (pokemon.id < 905)

  return (
    <div className={styles.container}>
      <Head>
        <title>{"Pokemon | "+pokemon.name}</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{pokemon.name.toUpperCase()}</h1>
        <p className={styles.description}>Pokedex number: {pokemon.id}</p>
        <Image alt={pokemon.name} loader={({ src }) => src} height="200" width="200" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"} />
        <div className={styles.grid}>
          <Link href={backEnabled ? ('/pokemon/' + (pokemon.id - 1)) : '#'}>
            <div className={backEnabled ? styles.card : styles.dcard}>
              Back
            </div>
          </Link>
          <Link href={'/pokemon'}>
            <div className={styles.card}>
              Menu
            </div>
          </Link>
          <Link href={nextEnabled ? ('/pokemon/' + (pokemon.id + 1)) : '#'}>
            <div  className={nextEnabled ? styles.card : styles.dcard}>
              Next
            </div>
          </Link>
          
        </div>
      </main>
    </div>
  )
}

// export async function getServerSideProps({ params }) {
//   const req = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + params.pokemonId)
//   const data = await req.json();

//   return {
//     props: { pokemon: data }
//   }
// }

export async function getStaticPaths() {
  const req = await fetch("https://pokeapi.co/api/v2/pokemon-species/")
  const { count } = await req.json();

  const ids = Array.from({ length: count }, (_, i) => (i + 1)+"" )

  const path = ids.map(pokemonId => {
    return {params: {pokemonId: pokemonId}}
  })

  return {
    paths: path,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const req = await fetch("https://pokeapi.co/api/v2/pokemon-species/" + params.pokemonId)
  const data = await req.json();

  return {
    props: { pokemon: data }
  }
}
