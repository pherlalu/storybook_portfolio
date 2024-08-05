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
  imageSrc?: string;
  sourceUrl?: string;
  githubUrl?: string;
}

const ListSection = ({ title, items }: { title: string; items: string[] }) => (
  <div className="text-left">
    <h3 className="md:text-xl text-base font-bold text-white-800 mb-2">
      {title}:
    </h3>
    <ul className="text-xs sm:text-base list-disc pl-8 mb-4 text-white-300">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const TechnologyChip = ({ tech }: { tech: string }) => (
  <div className="inline-flex items-center justify-center px-3 py-1 bg-indigo-700 text-indigo-200 text-xs md:text-sm rounded-full shadow-md mr-2 mb-2">
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
    <div className="fixed inset-0 bg-opacity-70 z-50 flex justify-center items-center px-6">
      <div className="backdrop-blur-md p-6 rounded-3xl shadow-indigo-600/40 border-b-2 border-indigo-600 shadow-md max-w-4xl max-h-[90vh] w-full space-y-6 overflow-y-auto custom-scrollbar">
        <div className="flex justify-between mt-4">
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              View Source
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:underline"
            >
              GitHub Repo
            </a>
          )}
        </div>
        <div className="text-center">
          {imageSrc && (
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto rounded-lg mb-4"
            />
          )}
          <h1 className="md:text-2xl text-lg font-bold m-6 text-center text-indigo-100">
            {title}
          </h1>
          <p className="text-indigo-300 text-center text-sm sm:text-base mb-4 italic font-semibold">
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
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm roboto-condensed italic text-indigo-400">
            <span>
              {startDate} to {endDate === null ? "In Progress" : endDate}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-indigo-200 transition ease-in-out duration-150 bg-indigo-600 hover:bg-indigo-700 rounded-2xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
