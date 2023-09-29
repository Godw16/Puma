import { Container } from '@mui/material'
import React from 'react'
import './app.scss'
import Navbar from './Components/Navbar/navbar'
import Ads from './Components/Ads/ads'

const App = () => {
  return (
    <div>
     <Container maxWidth={'100%'} className='container1'>
      <h4 className='head'>EXTRA 5% INSTANT DISCOUNT FOR ALL ONLINE PAYMENTS. FREE RETURNS.</h4>
      </Container>
        <Navbar />
        <Ads />
    </div>
    
  )
}

export default App 