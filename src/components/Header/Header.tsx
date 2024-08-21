import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAll, deselectAll } from '../../redux/companySlice';
import { selectCompanies } from '../../redux/selectors';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const companies = useSelector(selectCompanies);
  const allSelected = companies.every((company) => company.isSelected);

  const handleSelectAllChange = () => {
    if (allSelected) {
      dispatch(deselectAll());
    } else {
      dispatch(selectAll());
    }
  };

  return (
    <div className={styles.header}>
      <input
        type="checkbox"
        checked={allSelected}
        onChange={handleSelectAllChange}
      />
      <p>Выделить всё</p>
    </div>
  );
};
