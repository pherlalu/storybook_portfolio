import React from "react";
import SectionHeader from "../SectionHeader/SectionHeader";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto p-8  text-white relative">
      <div className="text-center mb-12">
        <SectionHeader
          title="Get in touch."
          subtitle="Let's talk about your project and build your software application"
        />

        <div className="p-8 rounded-lg border border-white-600">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="border border-gray-600 p-3 rounded bg-gray-700 text-white"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                className="border border-gray-600 p-3 rounded bg-gray-700 text-white"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Message"
                className="border border-gray-600 p-3 rounded w-full bg-gray-700 text-white"
                rows={7}
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Let's talk
            </button>
            <p className="mt-4 text-gray-400">
              By submitting this form, I agree to the{" "}
              <a href="/privacy-policy" className="text-blue-600 underline">
                privacy policy
              </a>
              .
            </p>
          </form>
        </div>

        <div className="p-8 rounded-lg text-center ">
          <h2 className="text-2xl font-semibold mb-4">Stay up to date</h2>
          <p className="text-gray-400 mb-6">
            Get notified when I publish something new, and unsubscribe at any
            time.
          </p>
          <div className="flex justify-center items-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-600 rounded px-4 py-2 w-64 bg-gray-700 text-white"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
