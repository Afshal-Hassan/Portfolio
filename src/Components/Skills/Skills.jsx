import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import SkillLoader from "../SkillLoader/SkillLoader";
import "../Skills/Skills.css";
function Skills() {



  return (
    <Container className="Skills">
      <Typography
        variant="h4"
        style={{
          textTransform: "uppercase",
          color: "#1484CD",
          fontWeight: "bold",
        }}
        className="Skills-title"
      >
        Skills
      </Typography>
     
      <Container style={{display:"flex",alignItems:"center",marginTop:70,justifyContent:"space-around"}}>
            <SkillLoader percent={65} offset={165}/>
            <SkillLoader percent={75} offset={130}/>
            <SkillLoader percent={80} offset={100}/>
      </Container>
      <Container style={{display:"flex",justifyContent:"space-around",marginTop:27,textAlign:"center"}}>
       <Typography variant="subtitle1" style={{textAlign:"center",fontWeight:"bold",flex:1}}>Communication Skills</Typography>
       <Typography variant="subtitle1" style={{textAlign:"center",fontWeight:"bold",flex:1}}>Productivity</Typography>
       <Typography variant="subtitle1" style={{textAlign:"center",fontWeight:"bold",flex:1}}>Designing</Typography>
      </Container>
    </Container>
  );
}

export default Skills;
