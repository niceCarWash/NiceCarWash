import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },  
  card: {
    borderRadius: theme.spacing(2),
  },
  cardMedia: {
    height: 290,
    padding: theme.spacing(3, 3, 0, 3),
    position: 'relative',
  },
  cardContent: {
    padding: theme.spacing(3),
  },
  image: {
    objectFit: 'contain',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  priceCta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: theme.spacing(1, 0),
  },
  }));