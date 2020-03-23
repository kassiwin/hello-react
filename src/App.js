import React from 'react';
import Game  from "./component/Game";
import Header from './component/Header';


class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
       
        <Game />
      </div>
   
  );
  }
  
}

export default App;
