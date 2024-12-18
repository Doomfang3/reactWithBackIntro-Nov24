import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const ProjectDetails = () => {
  const navigate = useNavigate()

  const [project, setProject] = useState({})
  const { projectId } = useParams()

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`
        )
        if (response.ok) {
          const data = await response.json()
          setProject(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchProjectDetails()
  }, [projectId])

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`,
        {
          method: 'DELETE',
        }
      )
      if (response.ok) {
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='ProjectDetails'>
      <h1>{project.title}</h1>
      <p>Description: {project.description}</p>
      <Link to={`/projects/${projectId}/update`}>Update</Link>
      <button type='button' onClick={handleDelete}>
        Delete
      </button>
    </div>
  )
}

export default ProjectDetails
