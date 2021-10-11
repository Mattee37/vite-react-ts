import React, { FC } from 'react';

import { Provider } from 'react-redux';
import store from './redux/store';

import Header from './components/Header';
import CounterList from './components/CounterList';

const App: FC = () => {
  console.log('App renderizada');

  return (
    <div className="grid">
      <Header />
      <Provider store={store}>
        <CounterList />
      </Provider>
    </div>
  );
};

export default App;
