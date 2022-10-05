import React from 'react'
import './Banner.css';
import { Card, Container, Typography } from '@mui/material';
function Banner() {
  return (
    <>
        <div className='Banner'>

            <Container style={{width:"50%",boxSizing:"border-box",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <div className='tagline'>
                                <Typography className='tagline-title' variant='h2'><span style={{fontWeight:"bold"}}>Afshal</span><span className='tagline-tile2'>Hassan</span></Typography><div className='divider'></div>
                                <Typography variant='subtitle1' className='subtitle'>Visual Product Designer and Developer</Typography>
                        </div>
            </Container>
            <Container style={{width:"62%",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid blue",boxSizing:"border-box",backgroundColor:"#1484CD"}} className="banner-wavy">
                  {/* <img src={Picture} alt="Picture" style={{width:265,height:265,borderRadius:"100%",marginLeft:150}} className="picture"/> */}
                  <Card style={{width:380,height:340,boxShadow:"0 4px 30px rgba(0,0,0,0.1)",background:"rgba(255,255,255,0.2)",overflow:"hidden",borderRadius:15,border:"1px solid rgba(255,255,255,0.3)"}} className="Card">
                    <Typography variant='h4' className='About-Me'>About Me</Typography>
                    <Typography variant='subtitle2' className='AboutMe-Desc'>Afshal Hassan is a full-stack developer with the love of a UI/UX designer. Listed skills include all things JavaScript, such as ReactJS, React Native, HTML5, CSS3, JQuery and Ajax as well as UI/UX design through Figma and Adobe XD.It also has a solid background in JavaScript frameworks like intimately familiar with the MERN (MongoDB, Express and Node.js) as well as Java and it's frameworks like (Spring, Spring Boot, Spring Security, Spring Data and JPA) software stack.

</Typography>
                  </Card>
            </Container>
        </div>
        </>

  )
}

export default Banner