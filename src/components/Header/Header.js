import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

const Header = props => {
  const { t, i18n } = useTranslation();
  const language = i18n.language;
  const toSwitch = language === 'fi' ? 'en' : 'fi';
  return (
    <div className={styles.Header}>
      <div className={styles.title}>{t('Where is my tarin')}</div>
      
    </div>
  );
};

export default Header;
