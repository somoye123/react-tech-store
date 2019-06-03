import React from "react";
import Title from "../title";
import aboutBcg from "../../images/aboutBcg.jpeg";

export default function info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              alt="about company"
              className="img-fluid img-thumbnail"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              ea aut velit maxime nostrum, laudantium pariatur sed consequuntur
              voluptatibus vel.
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              ea aut velit maxime nostrum, laudantium pariatur sed consequuntur
              voluptatibus vel.
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more info
            </button>
          </div>
        </div>
      </div> 
    </section>
  );
}
