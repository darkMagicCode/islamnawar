import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Islam Nawar</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={'https://scontent.fcai19-3.fna.fbcdn.net/v/t1.6435-9/120882915_2703765846506508_7432607664043084879_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHYeWvqkXZ8uBfpuXmEWnYnFCLoXFi1H6MUIuhcWLUfo7nsGJMZCYk0qG2NRbPtWEZvcNa6sOcXBPzRZdu5edl4&_nc_ohc=GFj8BU3IXvkQ7kNvgGkDTDJ&_nc_ht=scontent.fcai19-3.fna&oh=00_AfDY7bcYPffFibytrZh2Q0_w3zfxIs52J1bf27fdxWpLkA&oe=665C587E'}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
