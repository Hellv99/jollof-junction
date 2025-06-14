import React from "react";
import "./About.css";
import jollof1 from "/public/assets/jollof1.jpg";
import jollof4 from "/public/assets/jollof4.jpg";
import jollof5 from "/public/assets/jollof5.jpg";
const About = () => {
  return (
    <section id="about">
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
          <img
            src={jollof1 || "/public/assets/jollof1.jpg"}
            alt="Jollof Rice"
          />

          <div className="text-1">
            <h1>Custom Jollof Creations</h1>
            <p>
              Create your own jollof bowl with a selection of proteins, veggies,
              and special sauces, tailored to your taste!
            </p>
          </div>
        </div>
        <div className="features-1">
          <img
            src={jollof4 || "/public/assets/jollof4.jpg"}
            alt="Jollof Rice"
          />
          <div className="text-1">
            <h1>Cultural jollof Nights</h1>
            <p>
              Join us every weekend for themed nights that celebrates different
              regional styles of jollof, complete with music and performances.
            </p>
          </div>
        </div>
        <div className="features-1">
          <img
            src={jollof5 || "/public/assets/jollof5.jpg"}
            alt="Jollof Rice"
          />
          <div className="text-1">
            <h1>Jollof Workshops</h1>
            <p>
              Learn how to make the perfect jollof rice from our professional
              chefs in interactive cooking classes!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
