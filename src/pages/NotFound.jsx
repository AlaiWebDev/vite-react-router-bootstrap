import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div className='p-4'>
      <h1 className='fw-bold mb-4 text-center'>Oups, la page que vous avez demandé est introuvable…</h1>
      <Link to="/" className='btn btn-primary m-4'>Retour accueil</Link>
    </div>
  )
}

export default NotFound
