import React from 'react';
import CompanyList from './components/CompanyList/CompanyList';
import Controls from './components/Controls/Controls';
// import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Company List</h1>
      <Controls />
      <CompanyList />
    </div>
  );
};

export default App;
