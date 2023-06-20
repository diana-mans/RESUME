import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';
import FlagEngland from '@/shared/assests/icons/england-flag.svg';
import FlagRussian from '@/shared/assests/icons/russian-flag.svg';
import React from 'react';

export const LangSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const toggleLanguage = (): void => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <div className={classNames(cls.LangSwitcher, {}, [])}>
      {i18n.language === 'ru' ? (
        <FlagRussian onClick={toggleLanguage} className={cls.russianFlag} />
      ) : (
        <FlagEngland onClick={toggleLanguage} className={cls.englandFlag} />
      )}
    </div>
  );
};
