import { ReactNode } from "react";
import Image, { ImageProps } from "next/image";

export interface CardProps {
  children?: ReactNode;
  image: ImageProps;
  title: string;
  description?: string;
}

const Card = (props: CardProps): JSX.Element => {
  const { children, image, title, description } = props;
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center">
        <div className="mb-4">
          <Image {...image} alt={image.alt} className="rounded-3xl" />
        </div>
        <h3 className="font-montserrat font-bold text-center text-4xl lg:text-5xl">
          {title}
        </h3>
      </div>
      <h4 className="font-montserrat font-bold text-2xl lg:text-3xl text-center">
        {description}
      </h4>
    </div>
  );
};

export { Card };
