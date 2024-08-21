import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Company } from '../types/company';
import { generateFakeCompanies } from '../utils/dataGenerator';

interface CompanyState {
  companies: Company[];
  isLoading: boolean;
}

const initialState: CompanyState = {
  companies: generateFakeCompanies(20),
  isLoading: false,
};

// Создайте асинхронное действие для загрузки дополнительных компаний
export const loadMoreCompanies = createAsyncThunk(
  'companies/loadMoreCompanies',
  async () => {
    // Имитация асинхронной операции
    const response = await new Promise<Company[]>((resolve) => {
      setTimeout(() => resolve(generateFakeCompanies(20)), 1000);
    });
    return response;
  }
);

const companySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    addCompany: (state) => {
      state.companies.push({
        id: String(state.companies.length + 1),
        name: 'New Company',
        address: 'New Address',
        isSelected: false,
      });
    },
    removeCompanies: (state) => {
      state.companies = state.companies.filter((company) => !company.isSelected);
    },
    updateCompany: (
      state,
      action: PayloadAction<{ id: string; field: 'name' | 'address'; value: string }>
    ) => {
      const company = state.companies.find((c) => c.id === action.payload.id);
      if (company) {
        company[action.payload.field] = action.payload.value;
      }
    },
    selectAll: (state) => {
      state.companies.forEach((company) => {
        company.isSelected = true;
      });
    },
    deselectAll: (state) => {
      state.companies.forEach((company) => {
        company.isSelected = false;
      });
    },
    toggleCompanySelection: (state, action: PayloadAction<string>) => {
      const company = state.companies.find((c) => c.id === action.payload);
      if (company) {
        company.isSelected = !company.isSelected;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadMoreCompanies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadMoreCompanies.fulfilled, (state, action) => {
        state.companies.push(...action.payload);
        state.isLoading = false;
      })
      .addCase(loadMoreCompanies.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  addCompany,
  removeCompanies,
  updateCompany,
  selectAll,
  deselectAll,
  toggleCompanySelection,
} = companySlice.actions;

export default companySlice.reducer;
