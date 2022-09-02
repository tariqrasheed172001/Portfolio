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
                <a href={item.link} key={item.platform}>
                    <div className='social-icon-div'>
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