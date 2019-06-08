import React from "react";
import Title from "../title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form
            className="mt-5"
            action="https://formspree.io/somoye.ayotunde@gmail.com"
            method="POST"
          >
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                name="fullName"
                placeholder="Somoye Ayotunde"
                className="form-control"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                className="form-control"
              />
            </div>
            {/* subject */}
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="important!!!!!"
                className="form-control"
              />
            </div>
            {/* message */}
            <div className="form-group">
              <textarea
                name="message"
                className="form-control"
                placeholder="Hello world"
                rows="10"
              />
            </div>
            {/* submit */}
            <div className="form-group mt-3">
              <input
                type="submit"
                value="Send"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
