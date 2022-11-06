import { FC } from "react";
import { ICardProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export const Card: FC<ICardProps> = ({ label, header, tags, author }) => {
  return (
    <div className="bg-gradient-to-r from-background-light-gray to-background-dark-gray min-w-card-width-sm md:min-w-card-width-md lg:min-w-card-width-lg min-h-card-height rounded-2xl flex flex-col first:shadow-first-child first:ml-0 -ml-2.5 md:-ml-24 lg:-ml-32 shadow snap-start m-0 hover:-translate-y-4 first:hover:translate-y-[0.5rem, -1rem] first:hover:rotate-3 xl:hover:rotate-3 transition-all peer peer-hover:translate-x-[130px] p-6">
      <strong className="text-text-dark-gray mb-1">{label}</strong>
      <h3>
        <a href="#">{header}</a>
      </h3>
      <div className="mb-2 leading-4">
        {tags.map((tag) => (
          <a href="#" className="text-text-orange font-rubik text-xs">
            {tag}
          </a>
        ))}
      </div>
      <div className="flex gap-2 leading-5 mt-auto mb-0 pt-2">
        <a href="#">
          <FontAwesomeIcon icon={faCircleUser} size="xl" color="#ff7a18" />
        </a>
        <a href="#" className="font-semibold">
          {author.name}
        </a>
      </div>
    </div>
  );
};
