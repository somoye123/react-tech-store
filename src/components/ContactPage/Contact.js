import React from "react";
import Title from "../title";

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form className="mt-5">
            {/* first */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
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
          </form>
        </div>
      </div>
    </section>
  );
}
