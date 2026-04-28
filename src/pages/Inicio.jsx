import { useState, useEffect} from "react";
import PokemonCard from "../components/PokemonCard";
import styles from "./Inicio.module.css";

function Inicio() {

    const [pokemones, setPokemones] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState("");

    const filtrados = pokemones.filter(pokemon => pokemon.name.toLowerCase().includes(busqueda.toLowerCase()));

    useEffect(() => {
        async function dataPokemones() {
            try {
                setCargando(true);
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
                const data = await response.json();
                setPokemones(data.results);
                setCargando(false);


            } catch (error) {
                setError("Error al cargar los pokemones");
                console.error(error);
                setCargando(false);
            }
        }
        dataPokemones();
    }, [])


    return(
        <div className={styles.contenedor}>
            <h1 className={styles.titulo}>Pokédex</h1>

            <input
                className={styles.buscador}
                placeholder="Buscar pokemon"
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />

            {error ? <p>{error}</p> : 
            cargando ? <p>Cargando...</p> :
    
            <ul className={styles.grilla}>
                {filtrados.map((pokemon) => {
                    const id = pokemon.url.split("/")[6];
                    return <PokemonCard key={id} name={pokemon.name} id={id} />;
                })}
            </ul>}

        </div>
    )
}

export default Inicio