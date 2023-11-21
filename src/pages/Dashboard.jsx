import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Profile from '../components/Profile'
import MyProjects from '../components/MyProjects'

function Dashboard() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
      setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
  },[])
  return (
    <>
      <Header insideDashboard/> 

        <Row style={{marginTop:'60px'}} className='container-fluid'>
          <Col sm={12} md={8}>
          <h2 style={{marginTop:'30px'}} className='px-3'>Welcome <span className='text-warning'>{username}</span></h2>
            <MyProjects/>
          </Col>
          <Col sm={12} md={4}>
            <Profile/>
          </Col>
        </Row>
    </>
  )
}

export default Dashboard