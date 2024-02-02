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
      <label className='section-title' data-aos="zoom-in" data-aos-duration="2000">Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p data-aos="fade-right">want to get in touch? Contact me on any of the platform</p>
          <ContactForm />
          <Social />
        </div>
        <div className='download' data-aos="zoom-in-down">
         
          <a href="https://drive.google.com/file/d/1pyuJxFnQjT2-B_t7kjDiRTYrmGOeaqZ0/view?usp=sharing" download="resume.pdf">
            <CloudDownloadOutlinedIcon fontSize='small' />
            Download resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact