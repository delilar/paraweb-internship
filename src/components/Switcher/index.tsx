import { FC, useState, useEffect } from 'react';
import { SwitcherProps } from './types';
import "@style/components/Switcher/Switcher.scss";

const Switcher: FC<SwitcherProps> = ({ 
  items, 
  defaultSelected, 
  onChange 
}) => {
  const [selectedId, setSelectedId] = useState<string>(
    defaultSelected || (items.length > 0 ? items[0].id : '')
  );

  useEffect(() => {
    if (defaultSelected && defaultSelected !== selectedId) {
      setSelectedId(defaultSelected);
    }
  }, [defaultSelected]);

  const handleItemClick = (id: string) => {
    setSelectedId(id);
    if (onChange) {
      onChange(id);
    }
  };

  return (
    <div className="switcher">
      {items.map((item) => (
        <button 
          key={item.id}
          className={`switcher__button ${selectedId === item.id ? 'active' : ''}`}
          onClick={() => handleItemClick(item.id)}
        >
          <item.icon />
        </button>
      ))}
    </div>
  );
};

export default Switcher;