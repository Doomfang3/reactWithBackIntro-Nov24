import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProjectDetails from './pages/ProjectDetails'
import Navbar from './components/Navbar'
import NewPage from './pages/NewPage'
import UpdatePage from './pages/UpdatePage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/projects/:projectId' element={<ProjectDetails />} />
        <Route path='/projects/new' element={<NewPage />} />
        <Route path='/projects/:projectId/update' element={<UpdatePage />} />

        <Route path='*' element={<h1>404 page</h1>} />
      </Routes>
    </>
  )
}

export default App
