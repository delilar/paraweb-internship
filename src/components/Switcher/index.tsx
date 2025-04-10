import  { FC, useState } from 'react';
import { SwitcherProps } from './types';
import "@style/components/Switcher/Switcher.scss";
import LayoulistIcon from "@images/icons/layout-list.svg";
import CalendarIcon from "@images/icons/calendar.svg";


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
        <LayoulistIcon />
      </button>
      <button 
        className={`switcher__button ${selectedIcon === 'calendar' ? 'active' : ''}`}
        onClick={() => handleIconClick('calendar')}
      >
        <CalendarIcon />
      </button>
    </div>
  );
};

export default Switcher;
