import { createUseStyles } from 'react-jss';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const useStyles = createUseStyles((theme) => ({
  root: {
    padding: '8px 16px',
    background: 'transparent',
    color: theme.typography.color,
    textDecoration: 'none',
    borderRadius: theme.shape.radius,
    transition: theme.transition,
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.15)',
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

const Link = ({
  external,
  color = null,
  href,
  className: customClassName,
  children,
}) => {
  const classes = useStyles();
  return (
    <a
      href={href}
      target={external && '_blank'}
      rel={external && 'noopener noreferrer'}
      className={clsx(classes.root, color && classes[color], customClassName)}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  external: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'secondary', null]),
  customClassName: PropTypes.string,
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Link;
