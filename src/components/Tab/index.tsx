import { FC } from 'react';
import { TabProps } from './types';
import '@style/components/Tab/Tab.scss';

const Tab: FC<TabProps> = ({ count, label, isActive = false, onClick, disabled = false }) => {
  
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`tab ${isActive ? 'active' : ''} ${disabled ? 'disabled' : ''}`}
      onClick={handleClick}
    >
      <span className="label">{label}</span>
      <div className="count-wrapper">
        <span className="count">{count > 99 ? '99+' : count}</span>
      </div>
    </div>
  );
};

export default Tab;