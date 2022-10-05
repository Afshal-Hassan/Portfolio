import { Container } from '@mui/material'
import React from 'react'
import '../Background/Background.css'
function Background() {
  return (
    <div className='background'>
            <Container style={{border:"2px solid red",width:"50%"}}>
            </Container>
            <Container style={{width:"62%",backgroundColor:"#1484CD",borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%",border:"none"}}>
            </Container>
    </div>
  )
}

export default Background