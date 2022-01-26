import logo from "../images/title-logo.png";
//import music from "../music/Harry Potter Theme Song (FULLBULLA.ORG).mp3";

const Header = () => {
  return (
    <header className="header">
      <div className="header__image">
        <img src={logo} className="header__image--logo" alt="Harry Potter" />
      </div>
    </header>
  );
};

export default Header;
