import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./DetallePokemon.module.css";

function DetallePokemon() {

    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
    const [cargando, setCargando] = useState(true);


    const {id} = useParams();

    useEffect(() => {
        async function dataPokemon(){
            try {
                setCargando(true);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                const data = await response.json();
                setPokemon(data);
                setCargando(false);


            } catch (error) {
                setError("Error al cargar el pokemon");
                setCargando(false);
                console.error(error);
            }
        }
        dataPokemon();
    }, []);


    return(
        <div className={styles.contenedor}>
            {error ? <p>{error}</p> :
            cargando ? <p>Cargando...</p> :
            <div>
                <p className={styles.nombre}>Nombre: {pokemon.name}</p>
                <p className={styles.info}>Altura: {pokemon.height}</p>
                <p className={styles.info}>Peso: {pokemon.weight}</p>
                <img className={styles.imagen} src={pokemon.sprites.front_default} alt={pokemon.name} />

                <div className={styles.tipos}>
                    {pokemon.types.map((type) => (
                        <p key={type.type.name} className={styles.tipo}>Tipo: {type.type.name}</p>
                    ))}
                </div>
            </div> 
        }
        </div>
    )
}

export default DetallePokemon;