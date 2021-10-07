import React from "react";

function Article(props) {
  return (
    <div className="article">
      <figure>
        <img src={props.image} alt="Artcicle Screen Shot"></img>
        <figcaption>
          <h3>{props.title}</h3>
        </figcaption>
      </figure>
      <div className="motto">
        <h3> {props.motto}</h3>
      </div>
      <div className="desc">{props.desc}</div>
      <div className="link">
        <a href={props.url} target="_blank" rel="noreferrer">
          Let's Read
        </a>
      </div>
    </div>
  );
}

export default Article;
