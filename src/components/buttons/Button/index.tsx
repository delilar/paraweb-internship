import "@style/components/buttons/Button.scss";
import { ButtonProps } from './types';
import classNames from 'classnames';
import { Link } from 'react-router';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'filled',
  disabled = false,
  onContrastBackground = false,
  onClick,
  className = '',
  iconLeft: IconLeft,
  iconRight: IconRight,
  href
}) => {
  const buttonClasses = classNames(
    'button',
    {
      [`button--${variant}`]: variant,
      'button--on-contrast-background': onContrastBackground
    },
    className
  );

  const content = (
    <>
      {IconLeft && <IconLeft />}
      <span className="button__text">{children}</span>
      {IconRight && <IconRight />}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={buttonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;