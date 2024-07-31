import React, { useEffect } from "react";
import timexLogo from "../../assets/timex-logo.png";
import fjLogo from "../../assets/fujitsu-logo.png";
import timexImage from "../../assets/timex.jpg";
import fjImage from "../../assets/fujitsu.jpg";

const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      year: "2020-2023",
      title: "Fujitsu Philippines Inc. (Fujitsu)",
      description:
        "Fujitsu Philippines Inc. (FPI) is one of the countrys leading Information and Communications Technology (ICT) system integrators. Our local knowledge comes from almost 40 years of operations in the Philippines, while our global expertise comes from our affiliation with Fujitsu Ltd. of Japan, an international leader in computers, telecommunication, electronic components, software and services.",
      icon: fjLogo,
      position: "Application Systems Engineer / Consultant",
      image: fjImage,
    },
    {
      year: "2015-2020",
      title: "TMX PHILIPPINES, INC. (TIMEX GROUP)",
      description:
        "TMX PHILIPPINES, INC. , a wholly owned subsidiary of TMX Ltd., N.V., is located at the PEZA, Lapulapu City (Mactan), Cebu. We are one of the biggest exporters in the Mactan Economic Zone. Our vision is to be the location of choice for the development, manufacture and distribution of superior quality watches, watch parts and high technology wrist instruments and achieve ultimate customer satisfaction and loyalty.",
      icon: timexLogo,
      position: "Software Test Engineer II",
      image: timexImage,
    },
  ];

  useEffect(() => {
    const items = document.querySelectorAll(".timeline-item");

    const isInViewport = (el: Element): boolean => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const run = () =>
      items.forEach((item) => {
        if (isInViewport(item)) {
          item.classList.add("show");
        }
      });

    // Events
    window.addEventListener("load", run);
    window.addEventListener("resize", run);
    window.addEventListener("scroll", run);

    // Cleanup event listeners
    return () => {
      window.removeEventListener("load", run);
      window.removeEventListener("resize", run);
      window.removeEventListener("scroll", run);
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto text-white font-roboto p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">EXPERIENCE.</h2>
        <p className="text-lg mt-4 text-gray-400">
          Over the years, I have had an opportunity to work with the following
          reputable companies and freelance clients.
        </p>
      </div>
      <div className="timeline">
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className="timeline-item p-6 mb-10 border border-gray-700 rounded-lg shadow-sm bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out opacity-0 translate-y-10 flex"
          >
            <img
              src={caseStudy.image}
              alt="Company Team"
              className="w-1/2 h-auto object-cover rounded-lg mr-6"
            />
            <div className="flex flex-col justify-between w-1/2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl font-bold">
                  <img src={caseStudy.icon} className="h-10 w-10" alt="Logo" />
                </div>
                <div className="ml-4 text-sm text-gray-400">
                  {caseStudy.year} / {caseStudy.position}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-gray-400">{caseStudy.description}</p>
              </div>
              <div className="text-right text-gray-400 mt-4">
                <span>ljlagjlsg</span>
                <span className="block text-lg">13124 years</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
