import React, { useState } from "react";
import { Card } from "../Card/Card";
import SectionHeader from "../SectionHeader/SectionHeader";
import Modal from "./Modal";
import portfolio_v1 from "../../assets/projects/portfolio_project.png";
import runoutloud from "../../assets/projects/runoutloud_project.png";
import eventsinfo from "../../assets/projects/event_project.png";
import stockoutlet from "../../assets/projects/stockoutlet_project.png";

export const projectsData = [
  {
    id: 1,
    src: portfolio_v1,
    title: "Portfolio version 1",
    description:
      "Web application portfolio using HTML, CSS and Javasrcipt showcasing my skills, experiences, and projects.",
    sourceUrl: "https://steffiamper.000webhostapp.com/",
    youtubeUrl: "None",
    githubUrl: "",
    startDate: "2021-12-25",
    endDate: "2023-06-01",
    technologyStack: ["HTML", "CSS", "Javascript", "Github"],
    features: [],
    challenges: [],
    accomplishments: [],
  },
  {
    id: 2,
    src: runoutloud,
    title: "RunOutLoud",
    description:
      "“RunOutLoud” is a PHP CRUD-based Content Management System (CMS) website about running events such as marathons and fun runs. It will serve as a comprehensive platform for runners and event organizers alike. The CMS will be a web-based application built using PHP, MySQL, HTML, CSS, and JavaScript. ",
    sourceUrl: "https://runoutloud.000webhostapp.com/",
    youtubeUrl: null,
    githubUrl: "https://github.com/pherlalu/cms-webdev-project",
    startDate: "2023-11-23",
    endDate: "2023-11-23",
    technologyStack: [
      "PHP",
      "HTML",
      "CSS",
      "Javascript",
      "MySQL",
      "Bootstrap",
      "Github",
    ],
    features: [
      "It will serve as a comprehensive platform for runners and event organizers alike. The website will contain detailed information about upcoming running events, including dates, locations, and the distances available for registration.",
    ],
    challenges: [],
    accomplishments: [
      "Content management system that will generate a website consisting of a number of pages.",
      "Advance Content Search",
      "Implemented validation rules that are used on the data provided when creating and updating pages.",
      "PHP Generated Email (using mailtrap.io)",
    ],
  },
  {
    id: 3,
    src: eventsinfo,
    title: "Event Tickets Info",
    description:
      "A Ruby on Rails web application using the Ticketmaster API to fetch various events, attractions, or venues, such as the event name, venue, genre, and artist of a concert.",
    sourceUrl: "https://github.com/pherlalu/events_ticketinfo",
    youtubeUrl: null,
    githubUrl: "https://github.com/pherlalu/events_ticketinfo",
    startDate: "2024-06-23",
    endDate: "2024-06-28",
    technologyStack: [
      "HTML",
      "CSS",
      "Javascript",
      "Javascript",
      "Ruby on Rails",
      "PostgreSQL",
      "Github",
    ],
    features: [
      "Utilizes the Ticketmaster API to fetch various events, attractions, or venues.",
      "Database comprises tables corresponding to ActiveRecord models: Event, Venue, Classification, and Artist.",
      "Integrates data into a single Ruby on Rails application.",
      "Enhances event discovery experience by providing interconnected data from different sources (events, venues, genres, ticket prices, artists).",
    ],
    challenges: [
      "Ensuring data consistency and accuracy when integrating from multiple sources.",
      "Handling rate limits and potential changes in the Ticketmaster API.",
    ],
    accomplishments: [
      "Seamlessly integrating the Ticketmaster API with the Ruby on Rails application.",
      "Providing users with a comprehensive and interconnected view of event information.",
      "Creating an intuitive and engaging interface for users to explore and search event data.",
    ],
  },
  {
    id: 4,
    src: stockoutlet,
    title: "StockOutlet",
    description:
      "StockOutlet is an e-commerce platform that is developed using Ruby on Rails. StockOutlet e-commerce store specializes in the resale of branded and designer collectibles, including popular items from brands like Chanel, Louis Vuitton, Nike, and many more. ",
    sourceUrl: "https://github.com/pherlalu/stock_outlet",
    youtubeUrl: null,
    githubUrl: "https://github.com/pherlalu/stock_outlet",
    startDate: "2024-07-23",
    endDate: "2024-07-08",
    technologyStack: [
      "HTML",
      "CSS",
      "Javascript",
      "Javascript",
      "Ruby on Rails",
      "PostgreSQL",
      "Github",
      "Tailwind",
      "Stripe",
    ],
    features: [
      "Secure access for administrators to manage products, images, and website content.",
      "Customers can browse and view products by category and on dedicated detail pages.",
      "Filter products by criteria like on sale or new and use pagination for easy browsing.",
      "Customers can create accounts, manage carts, and complete checkouts with tax calculations based on location.",
    ],
    challenges: [
      "Creating a seamless user experience for filtering, searching, and navigating products, which requires thoughtful UI/UX design.",
      "Integrating Stripe payment processor and ensuring they work smoothly with the checkout process.",
    ],
    accomplishments: [
      "Successfully implementing a secure admin dashboard for managing products and website content.",
      "Creating a system that allows for easy CRUD operations with well-organized and real product data.",
      "Developing an intuitive interface for customers to browse, search, and filter products effectively.",
      "Achieving a polished, responsive design that provides a consistent look and feel across different devices.",
    ],
  },
];

const Projects = () => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    title: "",
    content: "",
    imageSrc: "",
    technologyStack: [] as string[],
    features: [] as string[],
    challenges: [] as string[],
    accomplishments: [] as string[],
    sourceUrl: "",
    githubUrl: "",
    startDate: "",
    endDate: "",
  });

  const openModal = (project: (typeof projectsData)[0]) => {
    setModalData({
      isOpen: true,
      title: project.title,
      content: project.description,
      imageSrc: project.src,
      technologyStack: project.technologyStack,
      features: project.features,
      challenges: project.challenges,
      accomplishments: project.accomplishments,
      sourceUrl: project.sourceUrl,
      githubUrl: project.githubUrl,
      startDate: project.startDate,
      endDate: project.endDate,
    });
  };

  const closeModal = () => {
    setModalData((prevState) => ({ ...prevState, isOpen: false }));
  };

  return (
    <div
      className="items-center justify-center max-w-8xl p-8 relative custom-margin"
      id="projects"
    >
      <SectionHeader
        title="Featured Projects."
        subtitle="Showcasing my projects aside from work."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-6 md:px-12">
        {projectsData.map((project) => (
          <div
            key={project.id}
            onClick={() => openModal(project)}
            className="hover:scale-105 transition-transform duration-300"
          >
            <Card
              title={project.title}
              content={project.description}
              image={project.src}
            />
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        description={modalData.content}
        imageSrc={modalData.imageSrc}
        technologyStack={modalData.technologyStack}
        features={modalData.features}
        challenges={modalData.challenges}
        accomplishments={modalData.accomplishments}
        sourceUrl={modalData.sourceUrl}
        githubUrl={modalData.githubUrl}
        startDate={modalData.startDate}
        endDate={modalData.endDate}
      />
    </div>
  );
};

export default Projects;
