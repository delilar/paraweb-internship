import classNames from 'classnames';
import '@style/components/buttons/UserIconButton.scss';
import { UserIconButtonProps } from './types';

const UserIconButton: React.FC<UserIconButtonProps> = ({
  onClick,
  icon: Icon,
  className = ''
}) => {

  const buttonClasses = classNames('user-icon-button', className);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <div className="icon-wrapper">
        {Icon}
      </div>
    </button>
  );
};

export default UserIconButton;
