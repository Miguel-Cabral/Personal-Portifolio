import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon  from '@mui/icons-material/Instagram'
import  FacebookIcon from '@mui/icons-material/Facebook'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='footer'>
      <p>Please follow me on:</p>
     <div className='social-media'>
      <InstagramIcon />
      <LinkedInIcon />
      <FacebookIcon />
     </div>
     <p>&copy; {currentYear} miguel-cabral </p>
    </div>
  )
}

export default Footer