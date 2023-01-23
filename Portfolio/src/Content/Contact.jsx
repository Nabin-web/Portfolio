import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError({ ...formError, [e.target.name]: "" });
  };

  const validateData = (data) => {
    let validate = true;
    if (data.name === "") {
      setFormError({ ...formError, name: "Please add some value." });
      validate = false;
    } else if (data.email === "") {
      setFormError({ ...formError, email: "Please add some value." });
      validate = false;
    } else if (data.message === "") {
      setFormError({ ...formError, message: "Please add some value." });
      validate = false;
    }
    return validate;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateData(formData) === true) {
      const formData = new FormData();
      formData.append(
        "name",
        document.querySelector('input[name="name"]').value
      );
      formData.append(
        "email",
        document.querySelector('input[name="email"]').value
      );
      formData.append(
        "message",
        document.querySelector('textarea[name="message"]').value
      );
      setLoading(true);
      fetch("https://getform.io/f/83db24c9-4e7d-4971-a76b-2a3e661a719b", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          response.status === 200 &&
            toast.success("Form Submitted Successfully.", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          response.status === 200 &&
            setFormData({ name: "", email: "", message: "" });
          response.status === 200 &&
            setFormError({ name: "", email: "", message: "" });

          response.status === 429 &&
            toast.warn("Please wait a minute.", {
              position: "bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setLoading(false);
        });
    } else {
      toast.warn("Please add all required fields.", {
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
    <section id="getintotouch ">
      <div className="my-10 mt-40 lg:px-4  px-8">
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
                  formError.name !== "" ? "error" : ""
                } px-4 py-3 w-full rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none`}
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                className={`${
                  formError.email !== "" ? "error" : ""
                } px-4 py-3 rounded bg-zinc-700 text-sm medium-bold focus:bg-zinc-600 outline-none`}
                onChange={handleChange}
                value={formData.email}
              />
              <textarea
                placeholder="Write a Message"
                name="message"
                className={`${
                  formError.message !== "" ? "error" : ""
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
