import { useDispatch, useSelector } from 'react-redux';

import { increase, decrease, reset } from './counter-slice';

const CounterView = () => {
  const value = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="app">
      <h2>Counter App</h2>
      <div className="counter-value">
        <strong>{value}</strong>
      </div>
      <div className="buttons">
        <div>
          <button onClick={() => dispatch(increase())}>+</button>
        </div>
        <div>
          <button onClick={() => dispatch(decrease())}>-</button>
        </div>
        <div>
          <button onClick={() => dispatch(reset())}>0</button>
        </div>
      </div>
    </div>
  );
};

export default CounterView;
