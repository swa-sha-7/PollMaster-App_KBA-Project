import React from 'react'
import CandidateNavBar from '../components/CandidateNavBar'
import CandidateNavBar2 from '../components/CandidateNavBar2'
import NavBarCommon from '../components/NavBarCommon'
import Footer from '../components/Footer'
import ViewResult from './ViewResult'
import OfficialNavBar from '../components/OfficialNavBar'

const ViewResultCandidate = () => {
  return (
    <>
      <CandidateNavBar/>
      <CandidateNavBar2/>
      <ViewResult/>
      <br />    
      <Footer/>
    </>
  )
}

export default ViewResultCandidate
