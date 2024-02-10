import React from 'react'
import { SocialData } from '../../Data/socialData'
import './social.css'


function Social() {
    const data = SocialData;
  return (
    <div className='social-contact'>
    {
        data.map((item) => {
            return (
                <a target='_blank' href={item.link} key={item.platform}>
                    <div className='social-icon-div' data-aos="zoom-in" data-aos-duration={`${item.id}000`}>
                        <img src={item.icons} className='social-icon' alt={item.platform} />
                    </div>
                </a>
            );
        })
    }
    </div>
  )
}

export default Social