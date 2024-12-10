/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Vihaas Design Technologies Official Website",
    description:
      "Designed and developed the company's official website using React JS, Tailwind CSS, and JavaScript (ES6+). Focused on creating a visually appealing, responsive, and user-friendly interface.",
    url: "https://www.vihaasdtech.com/",
  },
  {
    title: "Portfolio Web App",
    description:
      "A single-page web application showcasing my skills, projects, and contact details. Developed using React JS, Firebase, HTML, and CSS, it features a dynamic and responsive design that is 15% faster than traditional websites.",
    url: "https://portfolio-app-9da43.web.app/",
  },
  {
    title: "Point of Sales System",
    description:
      "A backend project for inventory, user, and customer management. Built using Java, Hibernate, and MySQL, it simplifies database interactions and provides authentication features for secure login.",
    url: "https://github.com/Arpit-26",
  },
  {
    title: "Stock Management System",
    description:
      "Developed a full-stack Java application to optimize stock management, reducing process time by 80% and achieving 100% accuracy. Utilized Java, Hibernate, and efficient data structures for optimal performance.",
    url: "https://github.com/Arpit-26",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
