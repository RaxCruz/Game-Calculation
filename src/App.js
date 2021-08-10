import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MainStart from "./components/MainStart";
import LeaderBoard from "./components/LeaderBoard";
import OptionList from "./components/OptionList";
import GameAdd from "./components/GameAdd";
import GameMultiply from "./components/GameMultiply";
import GameMinus from "./components/GameMinus";
import GameDivide from "./components/GameDivide";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <img
          src="https://www.tailwind-kit.com/images/landscape/6.svg"
          className="absolute h-full w-full object-cover"
          alt="no"
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <Header />
        <Switch>
          <Route path="/" exact component={MainStart}></Route>
          <Route path="/LeaderBoard/" component={LeaderBoard}></Route>
          <Route path="/Options/" component={OptionList}></Route>
          <Route path="/Game/add" component={GameAdd}></Route>
          <Route path="/Game/minus" component={GameMinus}></Route>
          <Route path="/Game/multiply" component={GameMultiply}></Route>
          <Route path="/Game/divide" component={GameDivide}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
