import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com"; // Anpassung: emailjs-com statt @emailjs/browser

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const form = useRef(); // Referenz auf das Formular für EmailJS

  const onSubmit = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0x9uiky", // Ersetze mit deiner Service-ID
        "template_ewu4mkm", // Ersetze mit deiner Template-ID
        form.current,
        "PMrQ6GVOnuoux-TMy" // Ersetze mit deiner User-ID
      )
      .then(
        (result) => {
          console.log(result.text);
          // Hier kannst du nach dem erfolgreichen Versand weitere Aktionen durchführen
        },
        (error) => {
          console.log(error.text);
          // Hier kannst du Fehlerbehandlung durchführen
        }
      );

    e.target.reset();
  };

  return (
    <>
      <form className="contactform" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                placeholder="Name"
              />
              {errors.name && errors.name.type === "required" && (
                <span className="invalid-feedback">Name is required</span>
              )}
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="form-group">
              <input
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Entered value does not match email format",
                  },
                })}
                
                type="email"
                name="email"
                placeholder="Email"
              />
              {errors.email && (
                <span className="invalid-feedback">{errors.email.message}</span>
              )}
            </div>
          </div>

          <div className="col-12">
            <div className="form-group">
              <textarea
                {...register("message", { required: true })}
                name="message"
                placeholder="Deine Nachricht"
              ></textarea>
              {errors.message && (
                <span className="invalid-feedback">Message is required.</span>
              )}
            </div>
          </div>

          <div className="col-12">
            <button type="submit" className="button">
              <span className="button-text">Senden</span>
              <span className="button-icon fa fa-send"></span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;