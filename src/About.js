import React from "react";
import "./css/About.css";
function About(props) {
  return (
    <div className="about">
      <h1>Ruchibrata Kundu</h1>
      <div className="intro">
        I am a software engineer with 5 years of experience in development at
        different stages of SDLC. Then I took a break to raise my kids. The
        accomplishment and satisfaction, I earned in those 5 years, encourages
        me to resume my career as a software developer. To revamp my career I
        recently grduated from the Grace Hopper Program in Web development. The
        journey I started with VB and SQL in client server application is now
        adapted with JavaScript, React, Node.js for Web Application.
      </div>
      <div className="education">
        <h2>Education</h2>
        <h3>The Grace Hopper Program at Fullstack Academy, New York, NY</h3>
        <p>
          Certificate in Software Engineering in full stack javascript web
          development(2020-2021)
        </p>

        <h3>
          PGDCA at National Institute of Electronics and Information Technology,
          India
        </h3>
        <p>Post Graduate Diploma in Computer Application(1999-2000)</p>
        <h3>B.Sc. at University of Calcutta, West Bengal, India </h3>
        <p>Bachelor of Science in Chemistry (1995-1998)</p>
      </div>
      <div className="workHistory">
        <h2>Work History</h2>
        <h3>
          Software Developer @Service Evaluation Concepts,NY,USA(2004-2005)
        </h3>
        <div>
          <p>
            Maintained company website and ATS using VB6 with VSS, ASP, SQL
            Server7, Crystal Report
          </p>
          <p>
            Enhanced ATS by incorporating different client requests to make it
            more user-friendly
          </p>
          <p>
            Added a webpage where shoppers can self-assign themselves for
            different assignments
          </p>
        </div>
        <h3>Project Assistant @NIELIT, Kolkata,India (2000-2003)</h3>
        <div>
          <p>
            Analyzed the client's existing system by interviewing and studying
            documents, to collect information for automation
          </p>
          <p>
            Designed System Requirement Specification (SRS) in partnership with
            a Senior System Analyst
          </p>
          <p>
            Developed Payroll Monitoring and Financial Accounting using Visual
            Basic 6, SQL Server 7, and Crystal Report
          </p>
        </div>
      </div>
      <div className="contact">
        <h2>Contact</h2>
        <p>e-mail:ruchibrata@hotmail.com</p>
        <p>https://www.linkedin.com/in/ruchibratakundu/</p>
      </div>
    </div>
  );
}

export default About;
