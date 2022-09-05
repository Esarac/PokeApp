import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from 'next/image'
import PokemonBox from '../../components/pokemonBox'

export default function Home({ pokemons }) {
  const pokemonBoxes = pokemons.results.map((pokemon)=>{
    return(
      <PokemonBox name={pokemon.name} url={pokemon.url} key={pokemon.url}/>
    )
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          POKEDEX
        </h1>
        <p className={styles.description}>Gotta Catch 'Em All</p>
        <div className={styles.grid}>
          {pokemonBoxes}
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const req = await fetch("https://pokeapi.co/api/v2/pokemon-species/")
  const data = await req.json();

  return {
    props: { pokemons: data }
  }
}
