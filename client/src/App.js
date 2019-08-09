import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}
// import './App.css';
// import { directive } from '@babel/types';

// function App() {
//   return (
//     <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//       Edit <code>src/App.js</code> and save to reload.
//          </p>
//          <a
//           className="App-link"
//            href="https://reactjs.org"
//            target="_blank"
//         rel="noopener noreferrer"
//          >
//            Learn React     </a>
//     /   </header>
     
//      </div>

//   );

export default App;
