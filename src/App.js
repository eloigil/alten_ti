import React from 'react';
import './App.scss';
import PartPage from './pages/PartPage';

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello world!</h1>

        <PartPage />
      </div>
    </Provider>
  );
}

export default App;
