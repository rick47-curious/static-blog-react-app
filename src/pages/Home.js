import React from 'react'
import { Navbar } from '../components/Navbar'
import './Style.css'
export const Home = () => {
  return (
    <div className='homeContainer'>
        <Navbar/>
        <h1 className='text-center m-4'>We post about pets with love &#128151;</h1>
        <div className="container main-container">
          <h3 className='text-center'>You can help us support our cause</h3>
          <p className='text-center'>With your little help we can fight for their cause and provide a better place for them</p>
        </div>
        <h4 className='text-center m-5'>If you are already a patreon, thanks for your support, woof! &#128062;</h4>
        <footer className='fixed-bottom home-footer'>
              <div className="text-center">Powered by &#128021;</div>
              <div className='margin-center'>Copyright ©️{new Date().getFullYear()} All rights reserved</div>
        </footer>
    </div>
  )
}
