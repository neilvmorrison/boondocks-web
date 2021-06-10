import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router-dom';

import Link from '../Link';
import Typography from '../Typography';
import useContent from '../../hooks/useContent';

const useStyles = createUseStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 55,
    padding: `0px ${theme.spacing(4)}px`,
  },
  homeButton: {
    cursor: 'pointer',
  },
  link: {
    background: theme.palette.secondary.main,
    padding: '8px 16px',
    textDecoration: 'none',
    color: '#000',
    borderRadius: theme.shape.radius,
  },
}));

const Header = () => {
  const classes = useStyles();
  const history = useHistory();
  const { content } = useContent('/site-header');
  const { Title } = content;

  const handleClick = () => history.push('/');
  return (
    <header className={classes.root}>
      <Typography
        component='h1'
        onClick={handleClick}
        className={classes.homeButton}
      >
        {Title}
      </Typography>
      <nav>
        <Link
          external
          href='https://github.com/neilvmorrison/react-starter'
          color='secondary'
        >
          Link to Repo
        </Link>
      </nav>
    </header>
  );
};

export default Header;
