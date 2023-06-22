import { Provider } from 'mobx-react';

import CounterStore from './counter-store';

import CounterView from './CounterView';

const counterStore = new CounterStore();

const App = () => {
  return (
    <Provider counterStore={counterStore}>
      <CounterView />
    </Provider>
  );
};

export default App;
