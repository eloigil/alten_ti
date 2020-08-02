import React from 'react';
import './App.scss';

import { Provider } from 'react-redux'
import store from './store'

import Header from './layout/Header';
import PartPage from './pages/PartPage';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />

        <PartPage />
      </div>
    </Provider>
  );
}

export default App;
