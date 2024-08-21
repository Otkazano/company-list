import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../features/companies/companiesSlice';
import { TextField } from '@mui/material';

const FilterBar: React.FC = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <TextField
      label="Фильтр по названию компании"
      onChange={handleFilterChange}
      fullWidth
    />
  );
};

export default FilterBar;
