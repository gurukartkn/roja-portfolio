import { useState } from "react";

import { client } from "../utils/sanity";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="shadow-lg rounded-2xl bg-white">
      <div className="py-12 px-2 sm:px-5 md:px-10 lg:px-14 flex flex-col items-center gap-3">
        <h2 className="text-xl lg:text-3xl mb-3 font-bold text-[#429BEC]">
          Take a coffee & chat with me
        </h2>

        {!isFormSubmitted ? (
          <div className="flex flex-col gap-4">
            <div className="flex">
              <input
                className="p-2 rounded-lg shadow-md bg-[#F3F9FF] md:w-96"
                type="text"
                placeholder="Your Name"
                name="username"
                value={username}
                onChange={handleChangeInput}
              />
            </div>
            <div className="flex">
              <input
                className="p-2 rounded-lg shadow-md bg-[#F3F9FF] md:w-96"
                type="email"
                placeholder="Your Email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div>
              <textarea
                className="p-2 rounded-lg shadow-md bg-[#F3F9FF] md:w-96 h-36"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button
              type="button"
              className="bg-[#063A8D] p-3 rounded-2xl mt-3 font-medium shadow-md text-white"
              onClick={handleSubmit}
            >
              {!loading ? "Send Message" : "Sending..."}
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold text-center">
              Thank you for getting in touch!
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
