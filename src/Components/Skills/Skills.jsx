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

      <Container
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 70,
          justifyContent: "space-around",
        }}
        className="SkillLoader-spinner"
      >
        <Container className="Comm-Skill">
          {" "}
          <SkillLoader percent={65} offset={165} />{" "}
          <Typography
            variant="subtitle1"
            style={{ textAlign: "center", fontWeight: "bold", flex: 1 }}
            className='mobile'
          >
            Communication Skills
          </Typography>
        </Container>
        <Container className="Comm-Skill">
          <SkillLoader percent={75} offset={130} />{" "}
          <Typography
            variant="subtitle1"
            style={{ textAlign: "center", fontWeight: "bold", flex: 1 }}
            className='mobile'

          >
            Productivity
          </Typography>
        </Container>
       <Container className="Comm-Skill"><SkillLoader percent={80} offset={100} /><Typography
          variant="subtitle1"
          style={{ textAlign: "center", fontWeight: "bold", flex: 1 }}
          className='mobile'

        
        >
          Designing
        </Typography></Container>
      </Container>
      <Container
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 27,
          textAlign: "center",
        }}
      >
        <Typography
          variant="subtitle1"
          style={{ textAlign: "center", fontWeight: "bold", flex: 1 }}
          className="desktop"
        >
          Communication Skills
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ textAlign: "center", fontWeight: "bold", flex: 1 }}
          className="desktop"
        >
          Productivity
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ textAlign: "center", fontWeight: "bold", flex: 1 }}
          className="desktop"
        >
          Designing
        </Typography>
      </Container>
    </Container>
  );
}

export default Skills;
