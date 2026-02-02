import React, { useContext } from 'react'
import Login from './pages/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AdminContext } from './context/AdminContext'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Admin/Dashboard'
import AddDoctor from './pages/Admin/AddDoctor'
import AllApointments from './pages/Admin/AllApointments'
import DoctorsList from './pages/Admin/DoctorsList'
const App = () => {

  const {aToken} = useContext(AdminContext)
  return aToken ?(
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar/>
      <div className='flex item-start'>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<></>}/>
          <Route path='/admin-dashboard' element={<Dashboard/>}/>
          <Route path='/add-doctor' element={<AddDoctor/>}/>
          <Route path='/all-appointments' element={<AllApointments/>}/>
          <Route path='/doctor-list' element={<DoctorsList/>}/>
        </Routes>
      </div>
    </div>
  ):(
    <>
      <ToastContainer />
      <Login/>
    </>
  )
}

export default App