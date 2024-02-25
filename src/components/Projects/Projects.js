import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import github_clone from "../../Assets/Projects/github_clone.png";
import google from "../../Assets/Projects/google.png";
import codechef from "../../Assets/Projects/codechef.png";
import codeforces from "../../Assets/Projects/codeforces.png";
import news from "../../Assets/Projects/news.png";
import leetcode from "../../Assets/Projects/leetcode.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my Coding Frameworks and Projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeforces}
              isBlog={false}
              title="Codeforces"
              description="Rated Specialist (Rating : 1418) on CodeForces which is the top platform for Competitive Programming. Participated in multiple contests and Achieved All India Rank 27 in CodeForces (Div 2 Round 876)."
              ghLink="https://codeforces.com/profile/utkarshb1209"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leetcode}
              isBlog={false}
              title="Leetcode"
              description="Rated Knight (Rating : 1859) and I am in Top 5% of all users on Leetcode which is the top platform for Coding. Solved more than 820 Data Structures and Alogorithms questions to show case my Problem Solving skills."
              ghLink="https://leetcode.com/utkarshb1209/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codechef}
              isBlog={false}
              title="Codechef"
              description="Rated 3 Star (Rating : 1671) on CodeChef which is the top platform for Competitive Programming. Achieved Global Rank 8 in Jan-Long-On 2022 and Global Rank 96 in Feb-Long-On 2022 among 13k+ participants."
              ghLink="https://www.codechef.com/users/utkarshb1209"            
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={google}
              isBlog={false}
              title="Google Kickstart"
              description="Achieved Global Rank : 1645 (Round H 2022) among 11k+ participants. Kick Start is one of Google's online coding competitions offering programmers of all skill levels the opportunity to hone their skills."
              ghLink="https://drive.google.com/file/d/1BEpCe8pkw-spTk72yUfFNoNMwIYH67Ex/view?usp=drive_link"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github_clone}
              isBlog={false}
              title="GitHub It"
              description="It takes username and Searches User ID on GitHub and Displays Repositories of the user. It uses React JS as a Frontend Framework and Fetches data from GitHub to display repositories."
              ghLink="https://github.com/utkarshb1209/Github_clone"
              demoLink="https://github.com/utkarshb1209/Github_clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={news}
              isBlog={false}
              title="News Monkey"
              description="It allows user to choose any category and it Displays Latest News of that topic. It uses HTML, CSS, JavaScript, Bootstrap and React JS as a Frontend Framework and NEWS API to
              make API calls in the backend."
              ghLink="https://github.com/utkarshb1209/News-App"
              demoLink="https://github.com/utkarshb1209/News-App" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
