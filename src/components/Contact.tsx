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

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.fullName}\nEmail: ${formData.email}\n\n${formData.message}`
    );

    window.location.href = `mailto:divna.mijic@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="snap-start cursor-browsingYellow flex flex-col md:flex-row w-[100svw] min-h-[150svh] box-border"
    >
      {/* Side nav space */}
      <div className="hidden md:block h-screen w-[12vw]"></div>

      {/* Main content */}
      <div className="w-full md:w-[88vw] flex flex-col justify-center items-center px-4 sm:px-6 md:px-8 py-12">
        <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 sm:mb-8 text-center md:text-left">
          CONTACT
        </h2>

        {/* Contact image */}
        <img
          src="media/images/contact-photo.webp"
          alt="contact-photo"
          className="w-[70vw] sm:w-[50vw] md:w-[35vw] object-contain mb-8 sm:mb-12"
          loading="lazy"
        />

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full max-w-lg gap-4 sm:gap-6"
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
            className="border-b-2 border-black bg-transparent px-2 pt-6 pb-2 focus:outline-none focus:border-[#ECD586] h-32 sm:h-40 resize-none"
            required
          ></textarea>

          <button
            type="submit"
            className="cursor-clicking hover:cursor-clicking w-full sm:w-auto self-center relative border bg-transparent rounded-none border-black text-black px-6 py-3 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#ECD586] hover:bg-black hover:text-white hover:border-black transition-all duration-300 group"
          >
            <span className="relative z-10">Send</span>
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
