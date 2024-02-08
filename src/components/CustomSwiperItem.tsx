import { useState } from "react";
import CustomButton from "./CustomButton";
import CustomThumbs from "./CustomThumbs";
import PrivacyCard from "./PrivacyCard";
import AgreementCard from "./AgreementCard";

type CustomSwiperItemProps = {
  backgroundImage: string;
  title: string;
  description: string;
  showButton?: boolean;
  showMarkets?: boolean;
  showPolicyButtons?: boolean;
  onButtonClick: () => void;
  firstThumbAction: () => void;
  secondThumbAction: () => void;
  thirdThumbAction: () => void;
  fourthThumbAction: () => void;
  fiveThumbAction: () => void;
  setMouseWheel?: () => void;
};

export default function CustomSwiperItem({
  backgroundImage,
  title,
  description,
  showButton,
  showMarkets,
  showPolicyButtons,
  onButtonClick,
  firstThumbAction,
  secondThumbAction,
  thirdThumbAction,
  fourthThumbAction,
  fiveThumbAction,
  setMouseWheel,
}: CustomSwiperItemProps) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showAgreement, setShowAgreement] = useState(false);

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
        {showMarkets && (
          <div className="customSwiperItem__store">
            <img src="images/appStore.png" alt="appStore" />
            <img src="images/googlePlay.png" alt="googlePlay" />
          </div>
        )}
        {showPolicyButtons && (
          <div className="customSwiperItem__policy">
            <span
              onClick={() => {
                setShowPrivacy(true);
                setMouseWheel && setMouseWheel();
              }}
              className="customSwiperItem__policy__item"
            >
              Политика конфиденциальности
            </span>
            <span
              onClick={() => {
                setShowAgreement(true);
                setMouseWheel && setMouseWheel();
              }}
              className="customSwiperItem__policy__item"
            >
              Пользовательское соглашение
            </span>
          </div>
        )}
        <CustomThumbs
          firstThumbAction={firstThumbAction}
          secondThumbAction={secondThumbAction}
          thirdThumbAction={thirdThumbAction}
          fourthThumbAction={fourthThumbAction}
          fiveThumbAction={fiveThumbAction}
        />
      </div>
      <CustomButton onClick={onButtonClick} showButton={showButton!} />
      {showPrivacy && (
        <PrivacyCard
          closeCard={() => {
            setShowPrivacy(false);
            setMouseWheel && setMouseWheel();
          }}
        />
      )}
      {showAgreement && (
        <AgreementCard
          closeCard={() => {
            setShowAgreement(false);
            setMouseWheel && setMouseWheel();
          }}
        />
      )}
    </div>
  );
}
