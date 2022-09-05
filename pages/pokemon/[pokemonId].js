import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Pokemon({ pokemon }) {
  const router = useRouter()
  const { pokemonId } = router.query

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokemon | {pokemon.name}</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>{pokemon.name.toUpperCase()}</h1>
        <p className={styles.description}>Pokedex number: {pokemon.id}</p>
        <Image alt={pokemon.name} loader={({ src }) => src} height="200" width="200" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.id + ".png"} />
        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href={"/pokemon/" + (pokemon.id - 1)}>Back</Link>
          </div>
          <div  className={styles.card}>
            <Link href={"/pokemon/" + (pokemon.id + 1)}>Next</Link>
          </div>
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

  console.log(path)

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
