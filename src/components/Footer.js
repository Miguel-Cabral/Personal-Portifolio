import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon  from '@material-ui/icons/Instagram'
import  FacebookIcon from '@material-ui/icons/Facebook'
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