import { useState } from 'react';
import cls from './Sidebar.module.scss';
import MenuIcon from '@/shared/assests/icons/sidebar.svg';
import { LangSwitcher } from '@/widgets/LangSwitcher';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { classNames } from '@/shared/lib/classNames/classNames';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <MenuIcon className={classNames(cls.sidebarIcon, {}, [])} onClick={onToggle} />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
