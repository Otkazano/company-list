import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCompany } from '../features/companies/companiesSlice';
import { Button, TextField } from '@mui/material';

const CompanyForm: React.FC = () => {
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCompany = { id: Date.now(), name: companyName, address: companyAddress };
    dispatch(addCompany(newCompany));
    setCompanyName('');
    setCompanyAddress('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Название компании"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        required
      />
      <TextField
        label="Адрес компании"
        value={companyAddress}
        onChange={(e) => setCompanyAddress(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">Добавить компанию</Button>
    </form>
  );
};

export default CompanyForm;
