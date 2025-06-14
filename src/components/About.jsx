import React from "react";
import "./About.css";
const About = () => {
  return (
    <section className="section-2">
      <div className="about-us">
        <div className="about">
          <h1>About</h1>
          <p>
            Jollof Junction is a gourmet restuarant specializing in unique takes
            on Nigeria's beloved jollof rice, elevating traditional flavors with
            modern twists.
          </p>
        </div>

        <div className="features-1">
          <img src="./src/img/jollof1.jpg" />
          <div className="text-1">
            <h1>Custom Jollof Creations</h1>
            <p>
              Create your own jollof bowl with a selection of proteins, veggies,
              and special sauces, tailored to your taste!
            </p>
          </div>
        </div>
        <div className="features-2">
          <img src="/src/assets/jollof4.jpg" />
          <div className="text-2">
            <h1>Cultural jollof Nights</h1>
            <p>
              Join us every weekend for themed nights that celebrates different
              regional styles of jollof, complete with music and performances.
            </p>
          </div>
        </div>
        <div className="features-3">
          <img src="/src/assets/jollof5.jpg" alt="" />
          <div className="text-3">
            <h1>Jollof Workshops</h1>
            <p>
              Learn how to make the perfect jollof rice from our professional
              chefs in interactive cooking classes!
            </p>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
