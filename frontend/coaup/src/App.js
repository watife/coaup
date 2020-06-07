import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import companyService from './core/company/use-cases';
import { Input } from './web/components';
import { Register } from './web/model/pages/register';
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
    // <div style={{margin: '40rem'}}>
    //   <Input />
    // </div>
  );
}

export default App;
