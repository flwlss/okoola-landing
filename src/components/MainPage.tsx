export default function MainPage() {
  return (
    <div className="mainPage">
      <div className="mainPage__wrapper">
        <div className="mainPage__leftContent">
          <img src="images/logo.svg" alt="logo" />
        </div>
        <div className="mainPage__rightContent">
          <h1>
            okoola-
            <br />
            <span>найди свою</span>
            <br />
            вторую
            <br />
            половинку
          </h1>
          <div className="mainPage__learnMore">
            <p>Узнать подробнее</p>
            <img src="images/arrow.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
