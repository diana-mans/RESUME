import { useTheme } from '@/app/providers/ThemeProvider'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  createStyles,
  Switch,
  type SwitchClassKey,
  type SwitchProps,
  type Theme,
  withStyles
} from '@material-ui/core'
import cls from './ThemeSwitcher.module.scss'
import LightIcon from '@/shared/assests/icons/theme-light.svg'
import DarkIcon from '@/shared/assests/icons/theme-dark.svg'
import React from 'react'

enum ColorsSwitch {
  LIGHT = '#fff',
  DARK = '#000',
  BACKGROUD = '#757f88',
}

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string
}

interface Props extends SwitchProps {
  classes: Styles
}

const IOSSwitch = withStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1)
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: ColorsSwitch.DARK,
        '& + $track': {
          backgroundColor: ColorsSwitch.BACKGROUD,
          opacity: 1,
          border: 'none'
        }
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff'
      }
    },
    thumb: {
      width: 24,
      height: 24
    },
    track: {
      borderRadius: 30 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border'])
    },
    checked: {},
    focusVisible: {}
  })
)(({ classes, ...props }: Props) => {
  return (
      <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked
      }}
      {...props}
    />
  )
})

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme()
  return (
      <div className={classNames(cls.ThemeSwitcher, {}, [])}>
          <IOSSwitch checked={theme === 'dark'} onChange={toggleTheme} name="checkedB" />{' '}
          {theme === 'light'
            ? (
                <LightIcon onClick={toggleTheme} className={cls.lightIcon} />
              )
            : (
                <DarkIcon onClick={toggleTheme} className={cls.darkIcon} />
              )}
      </div>
  )
}
