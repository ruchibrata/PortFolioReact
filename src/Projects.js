import React from "react";
import Project from "./Project";
import ImgCosmiqlo from "./images/logo.png";
import ImgPinIt from "./images/pinitLogo2.png";
import ImgReacto from "./images/REACTO.png";
import "./css/Projects.css";

function Projects(props) {
  return (
    <div className="container">
      <section className="intro">
        <h1>Curious about the projects I worked on?</h1>
        <p>Below there are few to explore</p>
      </section>

      <section className="projects">
        <Project
          image={ImgPinIt}
          title="PinIt"
          motto="Browsing? Like something? PinIt"
          techStack="React, Redux, Node.Js, Puppeteer, Express, IBM Cloudant and PouchDB"
          desc="PinIt is a web app that gives the user an opportunity to save a webpage and view it later offline. Users can save the link either from the app or through the chrome extension.
          Scraped data from the given webpage using Puppeteer, then saved and synced using Cloudant and PouchDb.
          Rerendered the saved webpage to view and manage in the collection  using React and Redux for the users to
          Designed the framework using Material-UI and deployed the project to Heroku
          "
          gitHub="https://github.com/pin-it-ghp2011/Pin-It"
          url="https://pin-it-reader.herokuapp.com/"
        />
        <Project
          image={ImgReacto}
          title="REACTO"
          motto="Need to Practice Algos? Do REACTO"
          techStack="JavaScript ES6, React, Node.Js"
          desc=" REACTO is designed to practice the Algorithm practices in more effective way. It provides a TextArea, A ChalkBoard and a Timer where users can write their thoughts, code, even draw and time their performance.
          The Timer is implemented using different React hooks with functional components
          The TextArea is built using the Editor component from Draft.js
          The ChalkBoard is implemented using the DOM Canvas element"
          gitHub="https://github.com/ruchibrata/reacto-for-algo"
          url="https://reacto-for-algo.herokuapp.com/"
        />
        <Project
          image={ImgCosmiqlo}
          title="Cosmiqlo"
          motto="Wish to venture into space in style? Shop in Cosmiqlo"
          techStack="React, Redux, Node.Js, Express, Postgres"
          desc="It's a website to shop for stylish space outfits. React and Redux are used for frontend design and state management. Node, Express, Sequelize, PostgreSQL are used for backend and managing the data."
          gitHub="https://github.com/CosmiQlo"
          url="https://cosmiqlo.herokuapp.com"
        />
      </section>
    </div>
  );
}

export default Projects;
