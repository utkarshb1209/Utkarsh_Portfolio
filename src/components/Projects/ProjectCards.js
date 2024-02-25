import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsLink45Deg,BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}
        {"\n"}
        {"\n"}
        {"\n"}
        {"\n"}
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsLink45Deg /> &nbsp;
          {props.isBlog ? "Link" : "Link"}
        </Button>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
