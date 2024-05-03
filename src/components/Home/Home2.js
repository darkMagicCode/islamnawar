import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with poetry and the art of words, crafting verses that speak to the soul. 📝
              <br />
              <br />I am well-versed in the classics like
              <i>
                <b className="purple"> Sonnets, Haikus, and Free Verse. </b>
              </i>
              <br />
              <br />
              My passion lies in exploring new forms of expression in the realm of
              <i>
                <b className="purple"> Creative Writing and Poetry, </b> and
                delving into themes of the human experience.
              </i>
              <br />
              <br />
              Whenever inspiration strikes, I pour my heart into crafting poems with <b className="purple"> pen and paper, </b>
              weaving emotions into every line with care and precision.
            </p>

          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/434459665_3620119791537771_6827752534362434466_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG4vY2bKZinIiBPJiLCaZ5C-T8JCC186wX5PwkILXzrBcu2mtDV2KphgHvSLR_WCKLbddD9mn-sDY5i7frACQCL&_nc_ohc=D91ZvQSV23EQ7kNvgG559Q0&_nc_ht=scontent.fcai19-3.fna&oh=00_AfBHAVp2TPOcCfbg1hDic-v6JQmkKuwskBgc2KQPfH8vog&oe=663ACEA6'} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
