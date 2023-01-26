import React, { useState } from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const api_key = "27429d0ffa8240a092362d85de9c7fde";
const base_url = "https://emailvalidation.abstractapi.com/v1/?";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError({ ...formError, [e.target.name]: "" });
  };

  const handleValidateEmail = () => {
    sendEmailValidationRequest(formData.email);
  };

  const sendEmailValidationRequest = async (email) => {
    let valid = true;
    try {
      if (email !== "") {
        const response = await fetch(
          `${base_url}api_key=${api_key}&email=${email}`
        );

        const data = await response.json();
        const isValidSMTP = data.is_smtp_valid.value;
        if (!isValidSMTP) {
          setFormError({ ...formError, email: "Enter valid Email" });
          valid = false;
        }
      }
      return valid;
    } catch (err) {
      throw err;
    }
  };

  const validateData = (data) => {
    let validate = true;
    if (data.name === "" && data.message === "" && data.email === "") {
      setFormError({
        ...formError,
        name: "Please add some value.",
        email: "Please add some value.",
        message: "Please add some value.",
      });
      validate = false;
    } else if (data.message === "" && data.email === "") {
      setFormError({
        ...formError,
        email: "Please add some value.",
        message: "Please add some value.",
      });
      validate = false;
    } else if (data.message === "" && data.name === "") {
      setFormError({
        ...formError,
        name: "Please add some value.",
        message: "Please add some value.",
      });
      validate = false;
    } else if (data.name === "" && data.email === "") {
      setFormError({
        ...formError,
        name: "Please add some value.",
        email: "Please add some value.",
      });
      validate = false;
    } else if (data.name === "") {
      setFormError({
        ...formError,
        name: "Please add some value.",
      });
      validate = false;
    } else if (data.email === "") {
      setFormError({
        ...formError,
        email: "Please add some value.",
      });
      validate = false;
    } else if (data.message === "") {
      setFormError({ ...formError, message: "Please add some value." });
      validate = false;
    }

    return validate;
  };

  const handleSubmit = (e) => {
    const data = {
      from_name: formData.name,
      to_name: "Nabin Kutu",
      message: formData.message,
      email: formData.email,
    };
    e.preventDefault();
    if (validateData(formData) === true && formError.email === "") {
      setLoading(true);
      emailjs
        .send("service_zz43qsb", "template_0ttlmes", data, "j_VMKN8GhQJsZSZxD")
        .then((res) => {
          if (res.status === 200) {
            toast.success("Form Submitted Successfully.", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setFormData({ name: "", email: "", message: "" });
            setFormError({ name: "", email: "", message: "" });
            setLoading(false);
          }
        })
        .catch((err) => {
          setFormError({ ...formError, email: "Not a valid email." });
          setLoading(false);
        });
    } else {
      toast.warn("Please enter valid values.", {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <section id="getintotouch" className="mt-8 mb-16">
      <div className="my-10 mt-20 lg:px-4  px-8">
        <div className="flex justify-center gap-2 items-baseline pb-10 text-white">
          <span className="text-2xl">Get</span>
          <span className="text-2xl semi-bold">In Touch</span>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:gap-20 gap-5 mx-auto">
          <div>
            <div className="mb-8 text-xl text-white">My Contact Details</div>
            <div className="mb-8 text-xl text-white">Send Me Your Details</div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className={`${
                  formError.name === "" || formError.name === undefined
                    ? ""
                    : "error"
                } px-4 py-3 w-full rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none`}
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className={`${
                  formError.email === "" || formError.email === undefined
                    ? ""
                    : "error"
                }  px-4 py-3 rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none`}
                onChange={handleChange}
                value={formData.email}
                onBlur={() => handleValidateEmail()}
              />

              <textarea
                placeholder="Write a Message"
                name="message"
                className={`${
                  formError.message === "" || formError.message === undefined
                    ? ""
                    : "error"
                } px-4 py-3 rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none h-44`}
                onChange={handleChange}
                value={formData.message}
              />
              <button
                type="submit"
                className="btn text-white  bg-zinc-700 hover:bg-zinc-800 w-2/5"
              >
                {loading ? (
                  <div className="flex text-center items-center justify-center">
                    <div className="loading_wrapper">
                      <span className=" mr-2 my-auto text-white">Sending</span>
                    </div>
                    <div className="dot-elastic" />
                  </div>
                ) : (
                  <div>Send</div>
                  // <a
                  //   href={`mailto:${formData.email}?subject=${formData.name}&body=${formData.message}`}
                  // >
                  //   Send
                  // </a>
                )}
              </button>
            </form>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="mb-8 text-xl text-white">My Contact Details</div>
            <div className="pb-4">
              <div className="text-sm tracking-wider text-blue-700 pb-2">
                EMAIL
              </div>
              <div className="text-sm text-zinc-400">
                nabin.kutu11@gmail.com
              </div>
            </div>
            <div className="pb-4">
              <div className="text-sm tracking-wider text-blue-700 pb-2">
                CONTACT NO.
              </div>
              <div className="text-sm text-zinc-400">+977-9861481105</div>
            </div>
            <div>
              <div className="text-sm tracking-wider text-blue-700 pb-2">
                ADDRESS
              </div>
              <div className="text-sm text-zinc-400">
                <div>Kausaltar, Bhaktapur</div>
                <div>Nepal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
