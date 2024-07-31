// src/ContactForm.js

import React from "react";

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Let's talk about your project
          </h1>
          <p className="mb-8">
            We help companies and individuals build out their brand guidelines.
          </p>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="budget"
                placeholder="Budget"
                className="border border-gray-300 p-2 rounded"
              />
              <input
                type="text"
                name="website"
                placeholder="Website"
                className="border border-gray-300 p-2 rounded"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                className="border border-gray-300 p-2 rounded w-full"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Let's talk
            </button>
            <p className="mt-4">
              By submitting this form, I agree to the{" "}
              <a href="/privacy-policy" className="text-blue-600 underline">
                privacy policy
              </a>
              .
            </p>
          </form>
        </div>
        <div className="md:w-1/3 w-full mt-8 md:mt-0 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center mb-4">
            <img
              src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
              alt="Workcation logo"
              className="w-auto h-auto mr-2"
            />
          </div>
          <blockquote className="italic mb-4">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            expedita voluptas culpa sapiente alias molestiae. Numquam corrupti
            in laborum sed rerum et corporis."
          </blockquote>
          <div className="flex justify-center md:justify-start items-center">
            <img
              src="/path/to/ceo-photo.png"
              alt="Brenna Goyette"
              className="w-12 h-12 rounded-full mr-2"
            />
            <div>
              <p>Brenna Goyette</p>
              <p className="text-gray-600">CEO of Workcation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
