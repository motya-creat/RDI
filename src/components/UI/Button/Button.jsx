import React from 'react';
import styles from './Button.module.scss';

const Button = ({ 
  variant = 'primary', 
  size = 'medium', 
  children, 
  className = '',
  ...props 
}) => {
  const classes = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;