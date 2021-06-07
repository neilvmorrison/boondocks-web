import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = createUseStyles((theme) => ({
  root: {
    padding: '8px 16px',
    background: 'transparent',
    color: theme.typography.color,
    textDecoration: 'none',
    border: 'none',
    borderRadius: theme.shape.radius,
    transition: theme.transition,
    textTransform: 'uppercase',
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.15)',
      cursor: 'pointer',
    },
  },
  primary: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      background: theme.palette.primary.dark,
    },
  },
  secondary: {
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
}));

const Button = ({
  children,
  color = null,
  onClick,
  className: customClassName,
}) => {
  const classes = useStyles();
  return (
    <button
      className={clsx(classes.root, color && classes[color], customClassName)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', null]),
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Button;
