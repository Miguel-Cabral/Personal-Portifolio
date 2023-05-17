import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import InstagramIcon  from '@material-ui/icons/Instagram'
import  FacebookIcon from '@material-ui/icons/Facebook'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
     <div className='social-media'>
      <InstagramIcon />
      <LinkedInIcon />
      <FacebookIcon />
     </div>
     <p> &copy: miguelcabral@2023 </p>
    </div>
  )
}

export default Footer