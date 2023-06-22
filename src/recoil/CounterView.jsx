import { useRecoilState } from 'recoil';

import { counterState } from './counter-atom';

const CounterView = () => {
  const [value, setValue] = useRecoilState(counterState);

  const increase = () => setValue(value + 1);

  const decrease = () => setValue(value - 1);

  const reset = () => setValue(0);

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

export default CounterView;
