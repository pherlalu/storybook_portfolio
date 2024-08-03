import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  startDate: string;
  endDate: string | null;
  technologyStack: string[];
  description: string;
  title: string;
  features?: string[];
  challenges?: string[];
  accomplishments?: string[];
  imageSrc?: string; // Add imageSrc to the ModalProps interface
  sourceUrl?: string;
  githubUrl?: string;
}

const ListSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="text-left">
    <h3 className="md:text-xl text-base font-bold text-[#CCD6F6] mb-2">
      {title}:
    </h3>
    <ul className="text-xs sm:text-base list-disc pl-8 mb-4 text-gray-300">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const TechnologyChip = ({ tech }: { tech: string }) => (
  <div className="inline-flex items-center justify-center px-3 py-1 bg-[#0D3B66] text-gray-200 text-xs md:text-sm rounded-full shadow-md mr-2 mb-2">
    {tech}
  </div>
);

const Modal = ({
  isOpen,
  onClose,
  startDate,
  endDate,
  technologyStack,
  description,
  title,
  features,
  challenges,
  accomplishments,
  imageSrc,
  sourceUrl,
  githubUrl,
}: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center px-6">
      <div className="bg-[rgba(33,82,243,0.1)] backdrop-blur-md p-6 rounded-3xl shadow-blue-700/40 border-b-2 border-[#645AFF] shadow-md max-w-4xl max-h-[90vh] w-full space-y-6 overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center">
          <div className="text-sm roboto-condensed italic text-gray-300">
            <span>
              {startDate} to {endDate === null ? "In Progress" : endDate}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-white transition ease-in-out duration-150 button-primary rounded-2xl"
          >
            Close
          </button>
        </div>
        <div className="text-center">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto rounded-lg mb-4"
            />
          )}
          <h1 className="md:text-2xl text-lg font-bold m-6 text-center Welcome-text">
            {title}
          </h1>
          <p className="text-gray-300 text-center text-sm sm:text-base mb-4 italic font-semibold">
            {description}
          </p>
          <ListSection title="Features" items={features || []} />
          <ListSection title="Challenges" items={challenges || []} />
          <ListSection title="Accomplishments" items={accomplishments || []} />
          <div className="flex flex-wrap gap-1 justify-center">
            {technologyStack.map((tech, index) => (
              <TechnologyChip key={index} tech={tech} />
            ))}
          </div>
          <div className="flex justify-between mt-4">
            {sourceUrl && (
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                View Source
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                GitHub Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
