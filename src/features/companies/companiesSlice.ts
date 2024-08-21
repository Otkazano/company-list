import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Company } from './Company';
import { generateFakeCompanies } from '../../utils/fakeCompanies';

interface CompaniesState {
  companies: Company[];
  selectedIds: number[];
  filter: string;
}

const initialState: CompaniesState = {
  companies: generateFakeCompanies(50), // Начальное количество компаний, можно увеличить до 10,000
  selectedIds: [],
  filter: '',
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany: (state, action: PayloadAction<Company>) => {
      state.companies.push(action.payload);
    },
    removeSelectedCompanies: (state) => {
      state.companies = state.companies.filter(company => !state.selectedIds.includes(company.id));
      state.selectedIds = [];
    },
    updateCompany: (state, action: PayloadAction<Company>) => {
      const index = state.companies.findIndex(company => company.id === action.payload.id);
      if (index !== -1) {
        state.companies[index] = action.payload;
      }
    },
    toggleSelectAll: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.selectedIds = state.companies.map(company => company.id);
      } else {
        state.selectedIds = [];
      }
    },
    toggleSelectCompany: (state, action: PayloadAction<number>) => {
      if (state.selectedIds.includes(action.payload)) {
        state.selectedIds = state.selectedIds.filter(id => id !== action.payload);
      } else {
        state.selectedIds.push(action.payload);
      }
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    }
  },
});

export const { addCompany, removeSelectedCompanies, updateCompany, toggleSelectAll, toggleSelectCompany, setFilter } = companiesSlice.actions;
export default companiesSlice.reducer;
