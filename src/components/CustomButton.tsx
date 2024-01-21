type CustomButtonProps = {
  lastSlide: boolean;
  onClick: () => void;
};

export default function CustomButton({
  lastSlide,
  onClick,
}: CustomButtonProps) {
  return (
    <div
      onClick={onClick}
      style={lastSlide ? { visibility: "hidden" } : {}}
      className="customButton"
    >
      Присоединиться
      <div>
        <img src="images/secondArrow.svg" alt="arrow" />
      </div>
    </div>
  );
}
