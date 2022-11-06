import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ICardProps {
  label: string;
  header: string;
  tags: string[];
  author: Author;
}

export type Author = {
  name: string;
  icon: IconProp;
};
