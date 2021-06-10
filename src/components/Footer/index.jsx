import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minHeight: 400,
    padding: theme.spacing(4),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      &copy; boondocks techonologies 2021
    </footer>
  );
};

export default Footer;
