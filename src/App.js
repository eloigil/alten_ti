import React from 'react';
import './App.scss';
import ItemsLIst from './components/ItemsList';

import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello world!</h1>

        <ItemsLIst />
      </div>
    </Provider>
  );
}

export default App;
