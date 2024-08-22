import React, { useState } from 'react';
import CompanyList from './components/CompanyList/CompanyList';
import Controls from './components/Controls/Controls';
import MoreButton from './components/MoreButton/MoreButton';
import LoadingComponent from './components/LoadingComponent/LoadingComponent';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="app">
      <h1>Список компаний</h1>
      <Controls />
      <CompanyList setIsLoading={setIsLoading} isLoading={isLoading} />
      <MoreButton setIsLoading={setIsLoading} isLoading={isLoading} />
      {isLoading && <LoadingComponent />}
    </div>
  );
};

export default App;
