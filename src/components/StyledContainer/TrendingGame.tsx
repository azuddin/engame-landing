import { Section } from "@engame/components";
import { carouselResponsive } from "@engame/constants";
import Carousel from "react-multi-carousel";

const TrendingGame = (): JSX.Element => {
  return (
    <div
      className="relative"
      style={{
        backgroundImage: "url('./assets/images/EG---bg-2.jpg')",
        backgroundSize: "cover",
      }}
    >
      <Section bgColor="bg-transparent">
        <div className="flex flex-col items-center space-y-5 py-14">
          <p className="text-center font-montserrat font-bold text-3xl z-10">
            Trending Games
          </p>
          <Carousel
            responsive={carouselResponsive}
            className="w-full pb-2"
            ssr
            partialVisible
          >
            {[
              {
                name: "Legendary moai",
                image:
                  "./assets/images/01 Home/EG---Landing-home_game-1(D).png",
              },
              {
                name: "The largest one",
                image:
                  "./assets/images/01 Home/EG---Landing-home_game-2(D).png",
              },
              {
                name: "Deep blue sea",
                image:
                  "./assets/images/01 Home/EG---Landing-home_game-3(D).png",
              },
              {
                name: "Scissors rock paper",
                image:
                  "./assets/images/01 Home/EG---Landing-home_game-4(D).png",
              },
              {
                name: "Super fast food",
                image:
                  "./assets/images/01 Home/EG---Landing-home_game-5(D).png",
              },
            ].map((i, k) => (
              <div
                key={k}
                className={
                  "flex flex-col min-w-max " + (k === 0 ? "" : " ml-6")
                }
              >
                <div className="flex h-44">
                  <img src={i.image} alt={`game-${k + 1}`} className="w-auto" />
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
