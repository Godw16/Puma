import { Container, Typography } from '@mui/material'
import React from 'react'
import '../Styles/ads.scss'

const ads = () => {
  return (
    <div>

      <Container maxWidth={'100%'} className='ad1'>
        {/* <img className='img' src='https://cdn.sanity.io/images/qa41whrn/prod/df866354f008055e7782675ef78ce3c9a718d9aa-2880x1040.jpg?w=1440&q=80&auto=format' alt=''/> */}

        <Typography className='h1'>
          FENTY x PUMA
        </Typography>
        <Typography className='h2'>
          COMING SOON
        </Typography>
        <p className='para'><span className='span1'>SIGN UP NOW</span> <span className='span2'>EXPLORE THE COLLECTION</span></p>
      </Container>
      <Container maxWidth={'100%'} className='ad2'>
        <Typography className='h1'>
          NEW & TRENDING
        </Typography>
        <Typography className='h2'>
          LEVEL UP YOUR STYLE GAME
        </Typography>
        <p className='para'><span className='span1'>MEN</span> <span className='span2'>WOMEN</span> <span className='span3'>KIDS</span></p>

      </Container>
      <Container maxWidth={'100%'} className='ad3'>

        <Typography className='h1'>
          Extra 15% off on orders above ₹4499
        </Typography>
        <Typography className='h2'>
          Discount auto-applied at checkout
        </Typography>
      </Container>
      <Container maxWidth={'100%'} className='ad4'>
        <Typography className='h1'>
          POWER UP YOUR PERFORMANCE
        </Typography>
        <Typography className='h2'>
          ALL-NEW CRICKET COLLECTION
        </Typography>
        <p className='para'><span className='span1'>SHOP NOW</span> <span className='span2'>SHOP ALL CRICKET</span> </p>

      </Container>
      <Container maxWidth={'100%'} className='ad5'>
        <Typography className='h1'>
          DARE TO BE YOU
        </Typography>
        <Typography className='h2'>
          DARE TO COLLECTION
        </Typography>
        <Typography className='h3'>
          Worn By Kareena Kapoor Khan
        </Typography>
        <p className='para'><span className='span1'>SHOP NOW</span> <span className='span2'>SHOP CURATED LOOKS</span> </p>

      </Container>
      <Container maxWidth={'100%'} className='ad7'>
        <Typography className='h1'>
        X-POWER
        </Typography>
        <Typography className='h2'>
        PUMA x MERCEDES-AMG PETRONAS F1 TEAM
        </Typography>
        <p className='para'><span className='span1'>SHOP NOW</span> <span className='span2'>SHOP ALL MOTORSPORT</span> </p>
      </Container>
    </div>
  )
}

export default ads