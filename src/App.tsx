import React, { FC } from "react";

import { Provider } from "react-redux";
import store from "./store/store";

import "./styles/App.css";

import Header from "./components/Header";
import CounterList from "./components/CounterList";

const App: FC = () => {
  console.log("App renderizada");

  return (
    <div className="grid">
      <Provider store={store}>
        <Header />
        <CounterList />
      </Provider>
    </div>
  );
};

export default App;
