import React from 'react'
import Separator from '../../common/seperator/Separator'
import './achieve.css'
import ExperienceCard from './achievementCard/ExperienceCard'
import { experienceData } from '../../Data/experience'

function Experiance() {
    const data = experienceData;
  return (
    <div className='achievements'>
        <Separator />
        <label className='section-title' >Experiance</label>
        <div className='achievement-list' data-aos="fade-left" >
            {data.map((experience) => {
                return (
                    <ExperienceCard achievement={experience} />
                )
            })}
        </div>
    </div>
  )
}

export default Experiance
