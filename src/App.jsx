import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Inicio from './pages/Inicio';
import DetallePokemon from './pages/DetallePokemon';
import styles from "./App.module.css";



function App() {
  
  return (
    
      <BrowserRouter>
        <nav className={styles.nav}>
          <ul>
            <li><Link to="/">Inicio</Link></li>
          </ul>
        </nav>
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/pokemon/:id" element={<DetallePokemon />} />
          </Routes>
        </main>

        <footer className={styles.footer}>
          <p>Pokédex</p>
        </footer>
      </BrowserRouter>
    
  )
}

export default App
