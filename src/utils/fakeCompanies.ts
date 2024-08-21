import { Company } from '../features/companies/Company';

export function generateFakeCompanies(count: number): Company[] {
  const companies: Company[] = [];
  for (let i = 1; i <= count; i++) {
    companies.push({
      id: i,
      name: `Company ${i}`,
      address: `Address ${i}`,
    });
  }
  return companies;
}
