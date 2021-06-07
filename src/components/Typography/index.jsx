import PropTypes from 'prop-types';
import clsx from 'clsx';
import { createUseStyles } from 'react-jss';

const HTMLEntities = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'];

const useStyles = createUseStyles((theme) => ({
  ...theme.typography,
  gutterBottom: {
    marginBottom: theme.spacing(1),
  },
}));

const Typography = ({
  children,
  gutterBottom,
  component: Component = 'p',
  className: customClassName,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <Component
      className={clsx(
        classes[Component],
        customClassName,
        gutterBottom && classes.gutterBottom
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

Typography.propTypes = {
  children: PropTypes.string.isRequired,
  component: PropTypes.oneOf(HTMLEntities),
};

export default Typography;
