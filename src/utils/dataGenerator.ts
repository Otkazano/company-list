import { Company } from '../types/company';

export const generateFakeCompanies = (count: number): Company[] => {
  const companies: Company[] = [];
  for (let i = 0; i < count; i++) {
    companies.push({
      id: String(i + 1),
      name: `Company ${i + 1}`,
      address: `Address ${i + 1}`,
      isSelected: false,
    });
  }
  return companies;
};
