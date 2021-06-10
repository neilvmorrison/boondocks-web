import { createUseStyles } from 'react-jss';
import Header from './Header';
import useContent from '../../hooks/useContent';
import ValueProp from './ValueProp';
import Typography from '../../components/Typography';

const useStyles = createUseStyles((theme) => ({
  root: {
    // margin: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
  callToAction: {
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
  aboutSection: {
    minHeight: '75vh',
    padding: theme.spacing(4),
    background: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: theme.palette.primary.contrastText,
  },
  valueProps: {
    minHeight: '75vh',
  },
  propsContainer: {
    padding: theme.spacing(6),
    background: '#fff',
    marginTop: -48,
    maxWidth: 1080,
    margin: '0 auto',
    border: '1px solid rgba(0, 0, 0, 0.15)',
    borderRadius: theme.shape.radius,
    [theme.breakpoints.up('md')]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridGap: theme.spacing(8),
    },
  },
}));

const Home = () => {
  const classes = useStyles();
  const { content } = useContent('/home-page');
  const { Title, SubTitle, CTA, value_props } = content;
  return (
    <main className={classes.root}>
      <Header title={Title} subtitle={SubTitle} cta={CTA} />
      <section className={classes.aboutSection}>
        <div style={{ maxWidth: 769, margin: '0 auto' }}>
          <Typography component='h1' className={classes.text}>
            About Us
          </Typography>
          <Typography className={classes.text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            inventore ab nisi repudiandae incidunt quam, optio dolorum deleniti
            quisquam! Tempora eius enim fugiat quae nemo, mollitia possimus
            excepturi. Enim, quidem!
          </Typography>
        </div>
      </section>
      {value_props && !!value_props.length && (
        <section className={classes.valueProps}>
          <div className={classes.propsContainer}>
            {value_props.map((prop) => (
              <ValueProp
                title={prop.Title}
                description={prop.Description}
                image={prop.Image[0].url}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
