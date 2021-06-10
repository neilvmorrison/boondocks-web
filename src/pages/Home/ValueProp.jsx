import { createUseStyles } from 'react-jss';

import Typography from '../../components/Typography';
import { API_URL } from '../../config/api';

const useStyles = (backgroundImage) =>
  createUseStyles((theme) => ({
    root: {
      textAlign: 'center',
    },
    image: {
      background: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      borderRadius: '50%',
      width: '100%',
      margin: '0 auto',
      height: 120,
      width: 120,
      marginBottom: theme.spacing(4),
    },
  }));

const ValueProp = ({ title, description, image }) => {
  const imageURL = `${API_URL}${image}`;
  const classes = useStyles(imageURL)();
  return (
    <div className={classes.root}>
      <div className={classes.image} />
      <Typography component='h1'>{title}</Typography>
      <Typography>{description}</Typography>
    </div>
  );
};

export default ValueProp;
