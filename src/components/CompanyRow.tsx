import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Company } from '../features/companies/Company';
import { updateCompany, toggleSelectCompany } from '../features/companies/companiesSlice';
import { TableRow, TableCell, Checkbox, TextField } from '@mui/material';
import { RootState } from '../app/store';

interface CompanyRowProps {
  company: Company;
}

const CompanyRow: React.FC<CompanyRowProps> = ({ company }) => {
  const dispatch = useDispatch();
  const selectedIds = useSelector((state: RootState) => state.companies.selectedIds);
  const [editableCompany, setEditableCompany] = useState(company);

  const handleSelect = () => {
    dispatch(toggleSelectCompany(company.id));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditableCompany({ ...editableCompany, [e.target.name]: e.target.value });
  };

  const handleBlur = () => {
    if (editableCompany !== company) {
      dispatch(updateCompany(editableCompany));
    }
  };

  return (
    <TableRow selected={selectedIds.includes(company.id)}>
      <TableCell padding="checkbox">
        <Checkbox checked={selectedIds.includes(company.id)} onChange={handleSelect} />
      </TableCell>
      <TableCell>
        <TextField
          name="name"
          value={editableCompany.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </TableCell>
      <TableCell>
        <TextField
          name="address"
          value={editableCompany.address}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </TableCell>
    </TableRow>
  );
};

export default CompanyRow;
