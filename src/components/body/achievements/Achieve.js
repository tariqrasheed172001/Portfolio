import React from 'react'
import Separator from '../../common/seperator/Separator'
import { achievementData } from '../../Data/achievements'
import './achieve.css'
import AchievementCard from './achievementCard/AchievementCard'

function Achieve() {
    const data = achievementData;
  return (
    <div className='achievements'>
        <Separator />
        <label className='section-title' >Achievements</label>
        <div className='achievement-list'>
            {data.map((achievement) => {
                return (
                    <AchievementCard achievement={achievement} />
                )
            })}
        </div>
    </div>
  )
}

export default Achieve