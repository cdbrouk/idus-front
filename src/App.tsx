import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import PageTemplate from './components/base/PageTemplate';
import Header from './components/main/Header';
import InputPage from './pages/InputPage';

function App() {
  return (
    <PageTemplate>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" component={InputPage} exact />
        <Route path="/card" component={InputPage} />
        <Route path="/input" component={InputPage} />
      </Switch>
    </PageTemplate>
  );
}

export default App;
