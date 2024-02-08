type CustomThumbsProps = {
  firstThumbAction: () => void;
  secondThumbAction: () => void;
  thirdThumbAction: () => void;
  fourthThumbAction: () => void;
  fiveThumbAction: () => void;
};

export default function CustomThumbs({
  firstThumbAction,
  secondThumbAction,
  thirdThumbAction,
  fourthThumbAction,
  fiveThumbAction,
}: CustomThumbsProps) {
  return (
    <div className="customThumbs">
      <img onClick={firstThumbAction} src="images/firstSlide.jpg" alt="" />
      <img onClick={secondThumbAction} src="images/secondSlide.jpg" alt="" />
      <img onClick={thirdThumbAction} src="images/thirdSlide.jpg" alt="" />
      <img onClick={fourthThumbAction} src="images/fourthSlide.jpg" alt="" />
      <img onClick={fiveThumbAction} src="images/fiveSlide.jpg" alt="" />
    </div>
  );
}
