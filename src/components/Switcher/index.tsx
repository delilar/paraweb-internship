import  { FC, useState } from 'react';
import { SwitcherProps } from './types';
import "../..//style/components/Switcher/Switcher.scss";


const Switcher: FC = () => {
    const [selectedIcon, setSelectedIcon] = useState<SwitcherProps['selectedIcon']>('layout-list');

    const handleIconClick: SwitcherProps['handleIconClick'] = (icon) => {
      setSelectedIcon(icon);
    };

  return (
    <div className="switcher">
      <button 
        className={`switcher__button ${selectedIcon === 'layout-list' ? 'active' : ''}`}
        onClick={() => handleIconClick('layout-list')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V8C20 8.53043 19.7893 9.03914 19.4142 9.41421C19.0391 9.78929 18.5304 10 18 10H6C5.46957 10 4.96086 9.78929 4.58579 9.41421C4.21071 9.03914 4 8.53043 4 8V6Z" stroke="#1F2733" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 16C4 15.4696 4.21071 14.9609 4.58579 14.5858C4.96086 14.2107 5.46957 14 6 14H18C18.5304 14 19.0391 14.2107 19.4142 14.5858C19.7893 14.9609 20 15.4696 20 16V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V16Z" stroke="#1F2733" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <button 
        className={`switcher__button ${selectedIcon === 'calendar' ? 'active' : ''}`}
        onClick={() => handleIconClick('calendar')}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M16 3V7M8 3V7M4 11H20M4 7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H6C5.46957 21 4.96086 20.7893 4.58579 20.4142C4.21071 20.0391 4 19.5304 4 19V7Z" stroke="#1F2733" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default Switcher;
