import { Link } from "react-router-dom";
import styles from "./PokemonCard.module.css";


function PokemonCard({name, id}) {


    return (
        <Link to={`/pokemon/${id}`} className={styles.link}>
        <div className={styles.card}>
            <h3 className={styles.nombre}>{name}</h3>
            <img className={styles.imagen} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={name} />
        </div>
        </Link>
    )
}

export default PokemonCard;