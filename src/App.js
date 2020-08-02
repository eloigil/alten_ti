import React from 'react';
import './App.scss';
import FeaturesList from './components/FeaturesList';

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello world!</h1>

        <FeaturesList />
      </div>
    </Provider>
  );
}

export default App;
