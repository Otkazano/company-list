import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import CompanyTable from './components/CompanyTable';
import CompanyForm from './components/CompanyForm';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container>
        <h1>Список компаний</h1>
        <CompanyForm />
        <CompanyTable />
      </Container>
    </Provider>
  );
};

export default App;
