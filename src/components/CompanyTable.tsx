import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { toggleSelectAll, setFilter } from '../features/companies/companiesSlice';
import CompanyRow from './CompanyRow';
import FilterBar from './FilterBar';
import { Table, TableBody, TableCell, TableHead, TableRow, Checkbox } from '@mui/material';

const CompanyTable: React.FC = () => {
  const dispatch = useDispatch();
  const { companies, selectedIds, filter } = useSelector((state: RootState) => state.companies);

  const filteredCompanies = companies.filter(company => company.name.includes(filter));

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(toggleSelectAll(event.target.checked));
  };

  return (
    <>
      <FilterBar />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                checked={selectedIds.length === filteredCompanies.length && filteredCompanies.length > 0}
                onChange={handleSelectAll}
              />
            </TableCell>
            <TableCell>Название компании</TableCell>
            <TableCell>Адрес</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredCompanies.map((company) => (
            <CompanyRow key={company.id} company={company} />
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default CompanyTable;
