import React from "react";
import { AboutProps } from "./About.types";

const About: React.FC<AboutProps> = ({
  profileImage,
  name,
  description,
  moreInfo1,
  moreInfo2,
  moreInfo3,
  moreInfo4,
  moreInfo5,
  socialLinks,
  galleryImages,
}) => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="flex flex-col items-center mb-8 text-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h1 className="text-4xl font-bold text-white-900 mb-4">{name}</h1>
        <p className="text-base font-semibold leading-7 text-indigo-600">
          {description}
        </p>

        <p className="mt-6 text-xl leading-8 text-white-700">{moreInfo1}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <p className="text-lg text-white-600">{moreInfo2}</p>
          <p className="text-lg text-white-600">{moreInfo3}</p>
        </div>
        <div className="space-y-4">
          <p className="text-lg text-white-600">{moreInfo4}</p>
          <p className="text-lg text-white-600">{moreInfo5}</p>
        </div>
      </div>
      <div className="flex justify-center space-x-4 mb-8">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className="text-white-600 hover:text-white-800"
          >
            <link.icon className="w-6 h-6" />
          </a>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index}`}
            className="rounded-lg object-cover w-full h-64"
          />
        ))}
      </div>
    </div>
  );
};

export default About;
