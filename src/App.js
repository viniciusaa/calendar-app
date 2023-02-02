import Calendar from "./components/Calendar";
import "./styles.scss";
import Logo from "./assets/images/codelitt-logo.svg";

function App() {
  return (
    <div>
      <div className="logo-container">
        <img src={Logo} alt="codelitt-logo" />
      </div>

      <div className="container">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
