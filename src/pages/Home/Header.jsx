import { createUseStyles } from 'react-jss';
import Button from '../../components/Button';
import Typography from '../../components/Typography';

const useStyles = createUseStyles((theme) => ({
  root: {
    minHeight: 'calc(100vh - 55px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const Header = ({ title, subtitle, cta }) => {
  const classes = useStyles();
  const handleClick = () => alert('Clicked!');

  return (
    <section className={classes.root}>
      <div>
        <Typography component='h1'>{title}</Typography>
        <Typography component='h2'>{subtitle}</Typography>
        <Button color='primary' onClick={handleClick}>
          {cta}
        </Button>
      </div>
    </section>
  );
};

export default Header;
