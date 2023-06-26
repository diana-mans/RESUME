import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      <h2>{t('Произошла непредвиденная ошибка')}</h2>
      <p>{t('Вероятно, что-то на сервере системы пошло не так, как было задумано')}</p>
      <button onClick={reloadPage}>{t('Обновить страницу')}</button>
    </div>
  );
};
