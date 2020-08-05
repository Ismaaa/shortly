import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Shortly from './components/Shortly';

function App() {
  return (
    <Provider store={store}>
      <Shortly />
    </Provider>
  );
}

export default App;
