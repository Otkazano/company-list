import React from 'react';
import { useDispatch } from 'react-redux';
import { Company } from '../../types/company';
import { toggleCompanySelection, updateCompany } from '../../redux/companySlice';
import styles from './CompanyRow.module.scss';

interface CompanyRowProps {
  company: Company;
}

export const CompanyRow: React.FC<CompanyRowProps> = ({ company }) => {
  const dispatch = useDispatch();

  const handleCheckboxChange = () => {
    dispatch(toggleCompanySelection(company.id));
  };

  const handleFieldChange = (field: 'name' | 'address', value: string) => {
    dispatch(updateCompany({ id: company.id, field, value }));
  };

  return (
    <div className={`${styles.row} ${company.isSelected ? styles.selected : ''}`}>
      <input 
        type="checkbox" 
        checked={company.isSelected} 
        onChange={handleCheckboxChange} 
      />
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleFieldChange('name', e.currentTarget.textContent || '')}
        className={styles.name}
      >
        {company.name}
      </div>
      <div
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => handleFieldChange('address', e.currentTarget.textContent || '')}
        className={styles.address}
      >
        {company.address}
      </div>
    </div>
  );
};
