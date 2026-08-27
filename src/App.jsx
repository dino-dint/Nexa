// import React from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AppRoutes from './components/routes/AppRoutes'



function App() {
  return (
    <div>
      <Navbar/>

      <main className=''>
        <AppRoutes/>
      </main>

      <Footer/>
    </div>
  )
}

export default App
