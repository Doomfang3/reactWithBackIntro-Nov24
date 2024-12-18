import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewPage = () => {
  const navigate = useNavigate()

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
        'https://project-management-api-4641927fee65.herokuapp.com/projects',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newProject),
        }
      )
      console.log(response)
      if (response.ok) {
        const data = await response.json()
        navigate(`/projects/${data.id}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>New Project</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input value={title} onChange={event => setTitle(event.target.value)} />
        </label>
        <label>
          Description
          <input value={description} onChange={event => setDescription(event.target.value)} />
        </label>
        <button type='submit'>Add New Project</button>
      </form>
    </>
  )
}

export default NewPage
