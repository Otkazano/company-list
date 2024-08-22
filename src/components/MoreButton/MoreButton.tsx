import React from 'react';
import { useDispatch } from 'react-redux';
import { loadMoreCompanies } from '../../redux/companySlice';
import styles from './MoreButton.module.scss';
import { AppDispatch } from '../../redux/store';

interface MoreButtonProps {
  setIsLoading: (isLoading: boolean) => void;
  isLoading: boolean;
}

const MoreButton: React.FC<MoreButtonProps> = ({ setIsLoading, isLoading }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    setIsLoading(true);
    dispatch(loadMoreCompanies()).finally(() => setIsLoading(false));
  };

  return (
    <button
      className={styles.button}
      type="button"
      onClick={handleClick}
      disabled={isLoading}
      aria-label="Загрузить больше компаний"
    >
      Загрузить больше компаний
    </button>
  );
};

export default MoreButton;
