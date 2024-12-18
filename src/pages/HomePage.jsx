import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  // A way to store the data
  const [projects, setProjects] = useState([])

  // A way to fetch the data
  const fetchProjects = async () => {
    // https://project-management-api-4641927fee65.herokuapp.com/projects
    try {
      const response = await fetch(
        'https://project-management-api-4641927fee65.herokuapp.com/projects'
      )
      if (response.ok) {
        const projectsData = await response.json()
        setProjects(projectsData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Fetch the data at the right time
  useEffect(() => {
    fetchProjects()
  }, [])

  return (
    <>
      <h1>Home Page</h1>
      {/* Display the list of projects as links */}
      <ul>
        {projects.map(currentProject => (
          <li key={currentProject.id}>
            <Link to={`/projects/${currentProject.id}`}>{currentProject.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default HomePage
