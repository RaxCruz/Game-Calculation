import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import MainStart from "./components/MainStart";
import LeaderBoard from "./components/LeaderBoard";
import OptionList from "./components/OptionList";
import GameAdd from "./components/GameAdd";

function App() {
  return (
    <Router>
      <div className='bg-indigo-900 relative overflow-hidden h-screen'>
        <img
          src='https://www.tailwind-kit.com/images/landscape/6.svg'
          className='absolute h-full w-full object-cover'
        />
        <div className='inset-0 bg-black opacity-25 absolute'></div>
        <Header />
        <Switch>
          <Route path='/' exact component={MainStart}></Route>
          <Route path='/LeaderBoard/' component={LeaderBoard}></Route>
          <Route path='/Options/' component={OptionList}></Route>
          <Route path='/Game/Add' component={GameAdd}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
