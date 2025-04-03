import { Container } from "./styles";
import VinayakSingh from "../../assets/profilephoto.png";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import PythonIcon from "../../assets/python.svg";
import javaIcon from "../../assets/java.svg";
import mysqlIcon from "../../assets/MySQL.svg";
import firebaseIcon from "../../assets/Firebase.svg";
import FlutterIcon from "../../assets/Flutter.svg";
import ExpressIcon from "../../assets/express.png";
import github from "../../assets/github.svg";
import aws from "../../assets/awsIcon.svg";
import burp from "../../assets/burp.png";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          I am a third-year Information Technology student, a hardworking individual with a deep passion for learning and innovation.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          I enjoy taking leadership roles and working on unique projects that did not exist before. My academic journey has provided me with a solid foundation in programming, data structures, and software engineering, which I have further strengthened through hands-on projects.</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
          I have experience in developing and deploying solutions that address real-world problems. Committed to continuous improvement, I look forward to internship and job opportunities where I can lead, create, and innovate, leveraging my passion for technology to make a meaningful impact.
</p>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.10 * 1000}>
              <img src={PythonIcon} alt="Python" style={{ width: "70px", height: "70px" }}  />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={javaIcon} alt="Java" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={htmlIcon} alt="HTML" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={cssIcon} alt="CSS" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={jsIcon} alt="JavaScript" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={mysqlIcon} alt="MySQL" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={firebaseIcon} alt="Firebase" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={reactIcon} alt="React" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={FlutterIcon} alt="Flutter" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={nodeIcon} alt="Node" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={ExpressIcon } alt="Express" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={aws} alt="aws" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={github} alt="aws" style={{ width: "70px", height: "70px" }}/>
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={burp} alt="burp" style={{ width: "150px", height: "150px" }}/>
            </ScrollAnimation>
          </div>
        </div>  
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={VinayakSingh} alt="Rohit Vijayan" style={{ width: "450px", height: "450px" }}/>
        </ScrollAnimation>
      </div>
    </Container>
  )
}
