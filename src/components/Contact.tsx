import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({ fullName: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="flex w-screen">
      <div id="sideNavSpace" className="h-screen w-[12vw] "></div>

      <div
        id="contact-section-container"
        className="w-[88vw] h-[150vh] flex flex-col justify-center items-center"
      >
        <h2 className="text-5xl font-playfair font-bold mb-8">CONTACT</h2>

        <img
          src="media/images/contact_photo.jpg"
          alt="contact_photo"
          className="w-[55vw] object-contain mb-12"
        />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg gap-6"
        >
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="border-b-2 border-black bg-transparent px-2 py-2 focus:outline-none focus:border-[#EAA3F4]"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border-b-2 border-black bg-transparent px-2 py-2 focus:outline-none focus:border-[#B9ADED]"
            required
          />

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border-b-2 border-black bg-transparent px-2 py-2 focus:outline-none focus:border-[#A0BEF4]"
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="border-b-2 border-black bg-transparent px-2 pt-[5.6rem] pb-2 focus:outline-none focus:border-[#ECD586] h-32 resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="w-[10vw] self-center relative border bg-transparent rounded-none border-black text-black px-6 py-3 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#B9ADED] hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
          >
            <span className="relative z-10">send</span>
            <span className="absolute inset-0 overflow-hidden">
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
             -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out skew-x-12"
              ></span>
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
