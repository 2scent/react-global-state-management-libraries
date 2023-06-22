import { RecoilRoot } from 'recoil';

import CounterView from './CounterView';

const App = () => {
  return (
    <RecoilRoot>
      <CounterView />
    </RecoilRoot>
  );
};

export default App;
