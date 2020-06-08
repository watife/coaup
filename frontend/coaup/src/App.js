import React, { useEffect } from 'react';
import './App.css';

import companyService from './core/company/use-cases';
import Routes from './web/routes';

const { getCompanies } = companyService;

function App() {
  useEffect(() => {
    async function loadCompanies() {
      const companies = await getCompanies()

      console.log(companies)
    }

    loadCompanies()

  }, [])
  return (
    <Routes />
  );
}

export default App;
