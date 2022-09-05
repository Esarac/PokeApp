import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function PokemonBox({ name, url }) {
    const id = url.split('/')[6]
    return (
        <Link href={"/pokemon/"+id}>
            <div className={styles.card}>
                <h1>{id}</h1>
                <p>{name}</p>
                <Image loader={({ src }) => src} height="200" width="200" src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"} />
            </div>
        </Link>
    )

}
