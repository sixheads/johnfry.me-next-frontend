import Work from './Work'

export default function WorkList({ projects }) {
  return (
    <ul className='grid--work' >
      {projects.data.map(project => (<Work key={project.id} project={project} />))}
    </ul>
  )
}
