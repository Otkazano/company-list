import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCompanies } from '../../redux/selectors';
import { CompanyRow } from './CompanyRow';
import { Header } from '../Header/Header';
import { AppDispatch } from '../../redux/store';
import styles from './CompanyList.module.scss';
import { loadMoreCompanies } from '../../redux/companySlice';

const CompanyList: React.FC = () => {
  const companies = useSelector(selectCompanies);
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight &&
        !isLoading
      ) {
        setIsLoading(true);
        dispatch(loadMoreCompanies()).finally(() => setIsLoading(false));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, isLoading]);

  return (
    <div className={styles.companyList}>
      <Header />
      {companies.map((company) => (
        <CompanyRow key={company.id} company={company} />
      ))}
      {isLoading && <div>Loading more companies...</div>}
    </div>
  );
};

export default CompanyList;
