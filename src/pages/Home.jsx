import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import DatasService from '../services/DatasService'
function Home({auteur}) {
  const realisations = DatasService()
  return (
    <div className='container my-5'>
      <h1 className='fw-bold mb-4 text-center'>Bienvenue sur cette démonstration</h1>
      <h2 className='text-center mb-5'>Développé par {auteur}</h2>
      <section className='d-flex flex-wrap justify-content-center gap-4'>
        {realisations.projects.map((project) => (
          <Card key={project.id} className='m-2 shadow-sm' style={{ width: '18rem' }}>
            <Card.Body className='text-center'>
              <Card.Title className='fw-semibold mb-3'>{project.title}</Card.Title>
              <Image 
                src={new URL(`../assets/img/${project.picture}`, import.meta.url).href}  
                alt="à définir"
                fluid
                className='mb-3'
                style={{ height: '180px', width: '100%', objectFit: 'cover' }}
            />
              <Card.Text className='text-muted mb-3'>
                {project.description}
              </Card.Text>
              <Button variant="primary">Voir plus</Button>
            </Card.Body>
            <Card.Footer className='text-center text-secondary small'>{project.techno}</Card.Footer>
          </Card>
      ))}
      </section>
    </div>
  )
}

export default Home
