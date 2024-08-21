import React from 'react';
import CompanyList from './components/CompanyList/CompanyList';
import Controls from './components/Controls/Controls';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>Компании</h1>
      <Controls />
      <CompanyList />
    </div>
  );
};

export default App;
