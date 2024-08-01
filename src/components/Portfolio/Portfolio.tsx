import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timexLogo from "../../assets/timex-logo.png";
import fjLogo from "../../assets/fujitsu-logo.png";
import TimelineElement from "./TimelineElement";
import SectionHeader from "../SectionHeader/SectionHeader";

const Portfolio: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      date: "2020-2023",
      title: "Application Systems Engineer / Consultant",
      location: "Fujitsu Philippines Inc. (Cebu, Philippines)",
      description:
        "Fujitsu Philippines Inc. (FPI) is one of the country's leading Information and Communications Technology (ICT) system integrators. Our local knowledge comes from almost 40 years of operations in the Philippines, while our global expertise comes from our affiliation with Fujitsu Ltd. of Japan, an international leader in computers, telecommunication, electronic components, software and services.",
      icon: fjLogo,
      type: "work",
    },
    {
      id: 2,
      date: "2019-2020",
      title: "Freelance Android Developer",
      location: "Finding Doctors App Client (Cebu, Philippines)",
      description: "Private client",
      icon: timexLogo,
      type: "work",
    },
    {
      id: 3,
      date: "2015-2020",
      title: "Software Test Engineer II",
      location: "TMX Philippines, Inc. (Cebu, Philippines)",
      description:
        "TMX PHILIPPINES, INC., a wholly owned subsidiary of TMX Ltd., N.V., is located at the PEZA, Lapulapu City (Mactan), Cebu. We are one of the biggest exporters in the Mactan Economic Zone. Our vision is to be the location of choice for the development, manufacture and distribution of superior quality watches, watch parts and high technology wrist instruments and achieve ultimate customer satisfaction and loyalty.",
      icon: timexLogo,
      type: "work",
    },
    {
      id: 4,
      date: "2010-2015",
      title: "Bachelor of Science in Computer Engineering Graduate",
      location: "De La Salle University - Dasmariñas (Cavite, Philippines)",
      description:
        "De La Salle University – Dasmariñas is a Roman Catholic Lasallian University in Dasmariñas City, Cavite, Philippines and a member institution of De La Salle Philippines.",
      icon: timexLogo,
      type: "education",
    },
  ];

  return (
    <section id="Timeline">
      <SectionHeader
        title="Career Journey."
        subtitle="Over the years, I have had an opportunity to work with the following reputable companies and freelance clients."
      />

      <VerticalTimeline animate={true}>
        {caseStudies.map((caseStudy) => (
          <TimelineElement
            key={caseStudy.id}
            id={caseStudy.id}
            date={caseStudy.date}
            title={caseStudy.title}
            location={caseStudy.location}
            description={caseStudy.description}
            type={caseStudy.type as "work" | "education" | undefined}
          />
        ))}
      </VerticalTimeline>
      <div className="text-center mt-12">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          See Resume
        </button>
      </div>
    </section>
  );
};

export default Portfolio;
