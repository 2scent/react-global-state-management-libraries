import { Provider } from 'react-redux';

import store from './store';

import CounterView from './CounterView';

const App = () => {
  return (
    <Provider store={store}>
      <CounterView />
    </Provider>
  );
};

export default App;
