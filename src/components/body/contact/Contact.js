import React from 'react'
import Separator from '../../common/seperator/Separator'
import './contact.css'
import Social from '../../common/socialContact/Social'
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import ContactForm from './contactForm/ContactForm';

function Contact() {
  return (
    <div className='contact'>
      <Separator />
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p>want to get in touch? Contact me on any of the platform</p>
          <ContactForm />
          <Social />
        </div>
        <div className='download'>
         
          <a href={require("../../../assets/resume/resume.pdf")} download="resume.pdf">
            <CloudDownloadOutlinedIcon fontSize='small' />
            Download resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact