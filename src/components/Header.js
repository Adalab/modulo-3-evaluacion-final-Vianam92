import logo from "../images/title-logo.png";
import useSound from "use-sound";
import music from "../music/Harry Potter Theme Song (FULLBULLA.ORG).mp3";

const Header = () => {
  const BoopButton = () => {
    const [play ,{stop}] = useSound(music);
    return (
      <>
        <button onClick={()=> play()} className="header__btn">ON</button>
        <button onClick={()=>stop()} className="header__btn">OFF</button>
      </>
    );
  };
  return (
    <header className="header">
      {BoopButton()}
      <div className="header__image">
        <img src={logo} className="header__image--logo" alt="Harry Potter" />
      </div>
    </header>
  );
};

export default Header;
