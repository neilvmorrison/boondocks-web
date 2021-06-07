import { createUseStyles } from 'react-jss';

import Typography from '../../components/Typography';
import Button from '../../components/Button';

const useStyles = createUseStyles((theme) => ({
  root: {
    margin: `${theme.spacing(2)}px ${theme.spacing(4)}px`,
  },
  callToAction: {
    textAlign: 'center',
    marginTop: theme.spacing(4),
  },
}));

const Home = () => {
  const classes = useStyles();
  const handleClick = () => alert('Clicked!');
  return (
    <main className={classes.root}>
      <Typography gutterBottom component='h1'>
        This is a title
      </Typography>
      <Typography gutterBottom component='h2'>
        This is a sub-title
      </Typography>
      <Typography>
        This is some content Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Fuga, voluptatibus nobis earum voluptas dignissimos similique
        expedita aspernatur odio, et vero soluta, beatae tenetur? Placeat
        deleniti aut distinctio tempore dolore esse minus molestiae, velit
        reiciendis voluptates repellendus doloribus quas excepturi blanditiis
        ratione illo nostrum quibusdam quisquam laboriosam eius eum aperiam ex.
      </Typography>
      <div className={classes.callToAction}>
        <Button color='primary' onClick={handleClick}>
          Here's a Button to Click
        </Button>
      </div>
    </main>
  );
};

export default Home;
