import { useCounterStore } from './counter-store';

const CounterView = () => {
  const { value, increase, decrease, reset } = useCounterStore();

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
