// Contact.js

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Let's Create Something Together!
        </h2>

        <form className="max-w-xl mx-auto flex flex-col md:flex-row">
          <input
            type="email"
            placeholder="Email"
            className="flex-1 px-4 py-3 mb-4 md:mb-0 md:mr-4 bg-gray-200 rounded-md"
          />

          <button className="btn bg-blue-500 text-white px-6 py-3 rounded-md">
            Send
          </button>
        </form>
      </div>
      <div className="bg-indigo-600 py-4  mt-12 flex-wrap  md:flex px-4 md:px-32 md:justify-between gap-4 text-white">
        <div className="items-start ">
          <div className="flex items-center gap-8 mr-32 mt-2">
            <div className="bg-white rounded-full p-2 ">
              <FaPhone className="text-lg text-blue-500" />
            </div>
            <h3>+251 0912345678</h3>
          </div>
          <div className="flex items-center gap-8 mr-32 mt-2">
            <div className="bg-white rounded-full p-2">
              <FaEnvelope className="text-lg text-blue-500" />
            </div>
            <h3>company@gmail.com</h3>
          </div>
          <div className="flex flex-1 items-center gap-8 mr-32 mt-2">
            <div className="bg-white rounded-full p-2">
              <FaMapMarkerAlt className="text-lg text-blue-500" />
            </div>
            <h3>22 mazoria, Addis Ababa, Ethiopia</h3>
          </div>
        </div>
        <div className="mt-12 flex justify-start gap-8">
          <a
            href="https://www.facebook.com/yourfacebookpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-white cursor-pointer" />
          </a>
          <a
            href="https://twitter.com/yourtwitterpage"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl text-white cursor-pointer" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourlinkedinprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-white cursor-pointer" />
          </a>
        </div>
      </div>
    </section>
  );
}
