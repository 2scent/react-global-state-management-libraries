import { useContext } from 'react';

import { MobXProviderContext, observer } from 'mobx-react';

const CounterView = () => {
  const { counterStore } = useContext(MobXProviderContext);

  const { value, increase, decrease, reset } = counterStore;

  return (
    <div className="app">
      <h2>Counter App</h2>
      <div className="counter-value">
        <strong>{value}</strong>
      </div>
      <div className="buttons">
        <div>
          <button onClick={increase}>+</button>
        </div>
        <div>
          <button onClick={decrease}>-</button>
        </div>
        <div>
          <button onClick={reset}>0</button>
        </div>
      </div>
    </div>
  );
};

export default observer(CounterView);
