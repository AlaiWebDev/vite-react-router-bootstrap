import { Link } from 'react-router-dom'
import ('./Header.css');
function Header() {
  return (
    <header className="bg-gray-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Mon application React</h1>
      <nav className="flex gap-4">
        <Link to="/" className="btn btn-primary m-4">Accueil</Link>
        <Link to="/about" className="btn btn-primary">À propos</Link>
      </nav>
    </header>
  )
}

export default Header
