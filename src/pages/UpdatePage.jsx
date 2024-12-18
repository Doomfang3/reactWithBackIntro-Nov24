import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdatePage = () => {
  const navigate = useNavigate()
  const { projectId } = useParams()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async event => {
    event.preventDefault()
    const newProject = {
      title,
      description,
    }

    try {
      const response = await fetch(
        `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProject),
        }
      )
      console.log(response)
      if (response.ok) {
        navigate(`/projects/${projectId}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          `https://project-management-api-4641927fee65.herokuapp.com/projects/${projectId}`
        )
        if (response.ok) {
          const data = await response.json()
          setTitle(data.title)
          setDescription(data.description)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchProjectDetails()
  }, [projectId])

  return (
    <>
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input value={title} onChange={event => setTitle(event.target.value)} />
        </label>
        <label>
          Description
          <input value={description} onChange={event => setDescription(event.target.value)} />
        </label>
        <button type='submit'>Update Project</button>
      </form>
    </>
  )
}

export default UpdatePage
