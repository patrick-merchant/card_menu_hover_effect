import { FC } from "react";
import { Card } from "./card";
import { ICardProps } from "./types";

interface ICardWrapperProps {
  cards: ICardProps[];
}
export const CardWrapper: FC<ICardWrapperProps> = ({ cards }) => {
  return (
    <div className="flex overflow-x-visible lg:overflow-x-scroll py-12 pr-0 pl-8 gap-4 ">
      {cards.map((card) => (
        <Card
          label={card.label}
          header={card.header}
          tags={card.tags}
          author={card.author}
        />
      ))}
    </div>
  );
};
