import '../../style/components/buttons/UserIconButton.scss';
import { UserIconButtonProps } from './types';

const UserIconButton: React.FC<UserIconButtonProps> = ({
  variant = 'filled',
  disabled = false,
  isMobile = false,
  onClick,
  className = ''
}) => {
  const buttonClasses = [
    'user-icon-button',
    isMobile ? 'user-icon-button--mobile' : '',
    `user-icon-button--${variant}`,
    disabled ? 'user-icon-button--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      <span className="user-icon-button__icon"></span>
    </button>
  );
};

export default UserIconButton;
