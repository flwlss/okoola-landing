import CustomButton from "./CustomButton";
import CustomThumbs from "./CustomThumbs";

type CustomSwiperItemProps = {
  backgroundImage: string;
  title: string;
  description: string;
  lastSlide?: boolean;
  onButtonClick: () => void;
  firstThumbAction: () => void;
  secondThumbAction: () => void;
  thirdThumbAction: () => void;
  fourthThumbAction: () => void;
};

export default function CustomSwiperItem({
  backgroundImage,
  title,
  description,
  lastSlide,
  onButtonClick,
  firstThumbAction,
  secondThumbAction,
  thirdThumbAction,
  fourthThumbAction,
}: CustomSwiperItemProps) {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        position: "relative",
      }}
      className="customSwiperItem"
    >
      <img
        className="customSwiperItem__logo"
        src="images/secondLogo.svg"
        alt="logo"
      />
      <div className="customSwiperItem__wrapper">
        <h1>{title}</h1>
        <p>{description}</p>
        {lastSlide && (
          <div className="customSwiperItem__store">
            <img src="images/appStore.png" alt="appStore" />
            <img src="images/googlePlay.png" alt="googlePlay" />
          </div>
        )}
        <CustomThumbs
          firstThumbAction={firstThumbAction}
          secondThumbAction={secondThumbAction}
          thirdThumbAction={thirdThumbAction}
          fourthThumbAction={fourthThumbAction}
        />
      </div>
      <CustomButton onClick={onButtonClick} lastSlide={lastSlide!} />
    </div>
  );
}
