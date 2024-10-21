import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Statistic from '../../components/statistic/Statistic'
import ProvisionList from '../../components/ProvisionList/ProvisionList'
import UpcomingCourses from '../../components/UpcomingCourses/UpcomingCourses'
import LearningStats from '../../components/LearningStats/LearningStats'

function Homepage() {
  return (
    <div>
        <Header/>
        <Statistic/>
        <ProvisionList/>
        <UpcomingCourses/>
        <LearningStats/>

    </div>
  )
}

export default Homepage