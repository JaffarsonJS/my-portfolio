import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Dictionary from "../../Assets/Projects/Dictionary.png"
import Nike from "../../Assets/Projects/Nike.png"
import Movie from "../../Assets/Projects/Movie.png"
import Estate from "../../Assets/Projects/Estate.png";
import Analog from "../../Assets/Projects/analog.png"
import Youtube from "../../Assets/Projects/Youtube.png"
import Portfolio from "../../Assets/Projects/Portfolio.png"
import MyFamily from "../../Assets/Projects/MyFamily.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Estate}
              isBlog={false}
              title="Real-Estate Website"
              description="Designed and developed a responsive real estate website using React.js, CSS, and media queries. The user-friendly interface allows seamless property exploration with dynamic filters."
              ghLink="https://github.com/JaffarsonJS/Real-Estate-Website"
              demoLink="https://primepalaces.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Nike}
              isBlog={false}
              title="Sneaker"
              description="I've created an immersive online shopping experience for sneaker enthusiasts with HTML, CSS and Javascript. Explore the latest trends, enjoy personalized features, and step into the future of footwear fashion with Sneaker"
              ghLink="https://github.com/JaffarsonJS/Sneaker-Website"
              demoLink="https://shoe-ecommerce-site.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Movie}
              isBlog={false}
              title="Movie Rating App"
              description="Designed and developed a responsive movie rating website using React.js, API, CSS that allows users to view IMDb
              ratings for all movies, including recently released ones,
              Implemented the application using the TMDB API, which
              fetches and renders data from the server"
              ghLink="https://github.com/JaffarsonJS/React-Movie-App"
              demoLink="https://react-movie-app-gray-kappa.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dictionary}
              isBlog={false}
              title="Dictionary"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/JaffarsonJS/Dictionary"
              demoLink="https://dictionaryapiapp.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Analog}
              isBlog={false}
              title="Analog Clock"
              description="I crafted a sleek analog clock using HTML, CSS, and JavaScript, showcasing my proficiency in front-end development. The clock features responsive design, real-time updates, and elegant styling. Leveraging CSS transformations and JavaScript's Date object, each hand moves seamlessly, providing an engaging and interactive user experience. This project highlights my ability to combine technology and aesthetics in a simple yet effective manner."
              ghLink="https://github.com/JaffarsonJS/Analog-Clock"
              demoLink="https://analog-clock-demosite.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio Generator"
              description="A portfolio generator using web technologies is a tool designed to help individuals showcase their work and achievements in a visually appealing and easily accessible manner. This tool allows users to create and customize their own online portfolios without the need for extensive web development skills. Implemented an innovative and user-friendly UI design for the web application, enhancing the overall user experience by 90%."
              ghLink="https://github.com/JaffarsonJS/Portfolio-Generator"
              demoLink="https://main--chimerical-duckanoo-20a2ca.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Youtube}
              isBlog={false}
              title="Youtube Clone"
              description="Developed a simple YouTube website, utilized cutting-edge technologies to achieve a 95% user interaction rate and enhance user experience. Integrated Rapid API to drive seamless streaming on the front-end"
              ghLink="https://github.com/JaffarsonJS/Youtube-Clone"
              demoLink="https://youtube-rapidapi.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MyFamily}
              isBlog={false}
              title="Me & Family Website"
              description="Me & family website is a user-friendly website crafted with HTML and CSS, providing a personalized platform for families to share memories and updates. Its clean design and intuitive interface create a seamless experience for users to connect and celebrate together."
              ghLink="https://github.com/JaffarsonJS/MyFamily-Website"
              demoLink="https://myfamily-demo-website.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
