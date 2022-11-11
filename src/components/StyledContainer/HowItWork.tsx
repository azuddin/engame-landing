import { Section } from "@engame/components";
import { MediaTypeProps } from "@engame/types";
import { filterClassNames } from "@engame/utils";

const HowItWork = (props: {
  mediaType?: MediaTypeProps;
  mediaUrl?: string;
}): JSX.Element => {
  const { mediaType, mediaUrl } = props;

  const mediaContainerStyle = () => {
    switch (mediaType) {
      case "image":
        return {
          backgroundImage: `url('${mediaUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        };
      case "video":
        return {};
      default:
        return {
          backgroundImage: "url('./assets/images/engame_step123.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        };
    }
  };

  const mediaContainerClassnames = filterClassNames([
    "border flex justify-center items-center relative w-full h-96 rounded-3xl",
    mediaType && mediaType === "video" ? "bg-black" : "",
  ]);

  return (
    <Section>
      <div className="flex flex-col md:flex-row space-y-10 md:space-x-6 md:space-y-0 py-10">
        <div className="flex flex-grow flex-col md:max-w-md items-center justify-center md:items-start space-y-6 md:space-y-2">
          <div className="max-w-xs md:h-32 md:w-32 flex justify-center">
            <img
              src="./assets/images/EG---cat354.png"
              width={800}
              height={800}
              alt="home-2"
              className="rounded-lg"
            />
          </div>
          <p className="text-center md:text-left font-montserrat font-extrabold text-3xl">
            Supercharge your business in just 3 steps!
          </p>
          <p className="text-center md:text-left font-lato text-lg">
            Gamify your business in less than 10 minutes with 3 simple steps!
            And get your products flying off the shelves!
          </p>
        </div>

        <div style={mediaContainerStyle()} className={mediaContainerClassnames}>
          {mediaType && mediaType === "video" ? (
            <video autoPlay muted loop src={mediaUrl}></video>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Section>
  );
};

export { HowItWork };
