import React from "react";
import { AppBar, Link, Toolbar, Typography } from "@mui/material";
import "../Header/Header.css";
import { Container } from "@mui/material";

function Header() {
  return (
    <AppBar color="transparent" position="static">
      <Container style={{paddingLeft:2}}>
        <Toolbar>
          <Typography className="title"
            variant="h6"
            fontWeight="bold"
          >
           mckl
          </Typography>
          <div className="Link-Container">
            <Typography underline="none" className="Link1"><Link underline="none" color="#009AEE">Service</Link></Typography>
            <Typography underline="none" className="Link1"><Link underline="none" color="#009AEE">Work</Link></Typography>
            <Typography underline="none" className="Link1"><Link underline="none" color="#009AEE">Contact</Link></Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
