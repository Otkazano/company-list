import { RootState } from './store';

export const selectCompanies = (state: RootState) => state.companies.companies;
export const selectSelectedCompanies = (state: RootState) =>
  state.companies.companies.filter((company) => company.isSelected);
