import { useMachine } from '@xstate/react';

import { counterMachine } from './counter-machine';

const CounterView = () => {
  const [state, send] = useMachine(counterMachine);

  return (
    <div className="app">
      <h2>Counter App</h2>
      <div className="counter-value">
        <strong>{state.context.value}</strong>
      </div>
      <div className="buttons">
        <div>
          <button onClick={() => send('INCREASE')}>+</button>
        </div>
        <div>
          <button onClick={() => send('DECREASE')}>-</button>
        </div>
        <div>
          <button onClick={() => send('RESET')}>0</button>
        </div>
      </div>
    </div>
  );
};

export default CounterView;
