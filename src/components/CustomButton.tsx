type CustomButtonProps = {
  showButton: boolean;
  onClick: () => void;
};

export default function CustomButton({
  showButton,
  onClick,
}: CustomButtonProps) {
  return (
    <div
      onClick={onClick}
      style={!showButton ? { visibility: "hidden" } : {}}
      className="customButton"
    >
      Присоединиться
      <div>
        <img src="images/secondArrow.svg" alt="arrow" />
      </div>
    </div>
  );
}
