export interface SwitcherProps {
    selectedIcon: 'layout-list' | 'calendar';
    handleIconClick: (icon: 'layout-list' | 'calendar') => void;
  }