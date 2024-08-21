import { Company } from '../types/company';
import { faker } from '@faker-js/faker';

export const generateFakeCompanies = (count: number): Company[] => {
  const companies: Company[] = [];
  for (let i = 0; i < count; i++) {
    companies.push({
      id: faker.string.uuid(),
      name: faker.company.name(),
      address: faker.location.streetAddress(),
      isSelected: false,
    });
  }
  return companies;
};

