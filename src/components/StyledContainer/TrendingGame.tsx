import Image from "next/image";
import { Section } from "@engame/components";
import { carouselResponsive } from "@engame/constants";
import Carousel from "react-multi-carousel";

const TrendingGame = (): JSX.Element => {
  return (
    <div className="relative">
      <Image
        src="/assets/images/EG---bg-2.jpg"
        alt="home-4"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <Section>
        <div className="flex flex-col items-center space-y-5 py-10">
          <p className="text-center font-montserrat font-extrabold text-4xl z-10">
            Trending Games
          </p>
          <Carousel
            responsive={carouselResponsive}
            className="w-full pb-2 space-x-4"
            ssr
            partialVisible
          >
            {[
              {
                name: "Legendary moai",
                image: "/assets/images/01 Home/EG---Landing-home_game-1(D).png",
              },
              {
                name: "The largest one",
                image: "/assets/images/01 Home/EG---Landing-home_game-2(D).png",
              },
              {
                name: "Deep blue sea",
                image: "/assets/images/01 Home/EG---Landing-home_game-3(D).png",
              },
              {
                name: "Scissors rock paper",
                image: "/assets/images/01 Home/EG---Landing-home_game-4(D).png",
              },
              {
                name: "Super fast food",
                image: "/assets/images/01 Home/EG---Landing-home_game-5(D).png",
              },
            ].map((i, k) => (
              <div
                key={k}
                className={
                  "flex flex-col min-w-max " +
                  // (k % 2 === 0 ? "bg-gray-200" : "") +
                  (k === 0 ? "" : " ml-6")
                }
              >
                <div className="flex-grow flex justify-center items-center relative w-full h-44">
                  <Image
                    src={i.image}
                    alt={`${k}-games-home-5`}
                    layout="fill"
                    objectFit="contain"
                    quality={100}
                  />
                </div>
                <p className="w-52 font-montserrat font-bold text-lg md:text-lg truncate">
                  {i.name}
                </p>
              </div>
            ))}
          </Carousel>
        </div>
      </Section>
    </div>
  );
};

export { TrendingGame };
