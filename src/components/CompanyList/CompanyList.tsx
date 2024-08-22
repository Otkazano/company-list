import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCompanies } from '../../redux/selectors';
import { CompanyRow } from './CompanyRow';
import { Header } from '../Header/Header';
import styles from './CompanyList.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { loadMoreCompanies } from '../../redux/companySlice';

interface CompanyListProps {
  setIsLoading: (isLoading: boolean) => void;
  isLoading: boolean;
}

const CompanyList: React.FC<CompanyListProps> = ({ setIsLoading, isLoading }) => {
  const [scrollTurnedOn, setScrollTurnedOn] = useState<boolean>(false);
  const companies = useSelector(selectCompanies);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !isLoading) {
        setIsLoading(true);
        dispatch(loadMoreCompanies()).finally(() => setIsLoading(false));
      }
    };
    if (scrollTurnedOn) {
      window.addEventListener('scroll', handleScroll);
    } else {
      window.removeEventListener('scroll', handleScroll);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch, isLoading, scrollTurnedOn, setIsLoading]);

  return (
    <div className={styles.companyList} role="table">
      <Header setScrollTurnedOn={setScrollTurnedOn} scrollTurnedOn={scrollTurnedOn} />
      {companies.map(company => (
        <CompanyRow key={company.id} company={company} aria-label={`Компания ${company.name}`} />
      ))}
    </div>
  );
};

export default CompanyList;
