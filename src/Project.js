import React from "react";
import "./css/Project.css";

function Project(props) {
  return (
    <section className="project-container">
      <figure>
        <img src={props.image} alt="Projectlogo"></img>
        <figcaption>
          <h3>{props.title}</h3>
        </figcaption>
      </figure>
      <div className="motto">
        <h4>{props.motto}</h4>
      </div>
      <div className="techStack">
        <h4>TechStack: {props.techStack} </h4>
      </div>
      <div className="desc">{props.desc}</div>
      <div className="gitHub">Link to gitHub : {props.gitHub}</div>
      <div className="link">
        <a href={props.url} target="_blank" rel="noreferrer">
          Let's Explore
        </a>
      </div>
    </section>
  );
}

export default Project;
