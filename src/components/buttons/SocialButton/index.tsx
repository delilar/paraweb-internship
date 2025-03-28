import '@style/components/buttons/SocialButton.scss';
import { SocialButtonProps } from './types';
import classNames from 'classnames';

const SocialButton: React.FC<SocialButtonProps> = ({
  onClick,
  className = '',
  icon,
  children
}) => {
  const buttonClasses = classNames('social-button', className);

  return (
    <button className={buttonClasses} onClick={onClick}>
      <span className="social-button__icon">{icon}</span>
      {children && <span className="social-button__text">{children}</span>}
    </button>
  );
};

export default SocialButton;
