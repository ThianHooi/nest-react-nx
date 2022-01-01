import { FC } from 'react';
import LayoutPage from './LayoutComponent/LayoutComponent';
import { BrowserRouter as Router } from 'react-router-dom';

const App: FC = (): JSX.Element => (
  <Router>
    <div className="App">
      <LayoutPage />
    </div>
  </Router>
);

export default App;
