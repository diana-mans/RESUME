import { classNames } from '@/shared/lib/classNames/classNames';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';
import { useState } from 'react';
import cls from './Sidebar.module.scss';
import MenuIcon from '@/shared/assests/icons/sidebar.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <MenuIcon className={classNames(cls.sidebarIcon, {}, [])} onClick={onToggle} />
      <div className={cls.switchers}>
        <ThemeSwitcher className={collapsed ? 'switcherCollapsed' : ''} />
      </div>
    </div>
  );
};
