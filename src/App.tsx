import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import PageTemplate from './components/base/PageTemplate';
import Header from './components/main/Header';
import TextAreaPage from './pages/TextAreaPage';
import CardPage from './pages/CardPage';

function App() {
  return (
    <PageTemplate>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/" component={CardPage} exact />
        <Route path="/card" component={CardPage} />
        <Route path="/textarea" component={TextAreaPage} />
      </Switch>
    </PageTemplate>
  );
}

export default App;
