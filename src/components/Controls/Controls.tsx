import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany, removeCompanies } from '../../redux/companySlice';
import { selectSelectedCompanies } from '../../redux/selectors';
import styles from './Controls.module.scss';

const Controls: React.FC = () => {
  const dispatch = useDispatch();
  const selectedCompanies = useSelector(selectSelectedCompanies);

  const handleAddCompany = () => {
    dispatch(addCompany());
  };

  const handleRemoveCompanies = () => {
    dispatch(removeCompanies());
  };

  return (
    <div className={styles.controls}>
      <button onClick={handleAddCompany} aria-label="Добавить новую компанию">
        Добавить компанию
      </button>
      <button
        onClick={handleRemoveCompanies}
        disabled={selectedCompanies.length === 0}
        aria-label="Удалить выбранные компании"
        aria-disabled={selectedCompanies.length === 0}
      >
        Удалить компанию
      </button>
    </div>
  );
};

export default Controls;
