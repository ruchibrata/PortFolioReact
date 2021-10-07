import React from "react";

import Article from "./Article";

import ImgHook from "./images/ReactHooks.png";

import "./css/Articles.css";

function Articles(props) {
  return (
    <div className="container">
      <section className="intro">
        <h1>Articles are my go to help for learning.</h1>
        <p>
          Not only I learn while reading them but when I write one - it
          solidifies my learning about the topic.
        </p>
      </section>
      <div className="articles">
        <Article
          image={ImgHook}
          title="What are React Hooks?"
          desc="It's an article explaining what React Hooks are, why they were introduced in react and how to use them."
          url="https://ruchibrata.medium.com/what-are-react-hooks-3c6093840cf9"
        />
        {/* <Article /> */}
      </div>
    </div>
  );
}

export default Articles;
