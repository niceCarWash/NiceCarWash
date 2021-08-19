import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  card: {
    borderRadius: theme.spacing(2),
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
  gridItem: {
    '& .latest-products__card-media': {
      background: theme.palette.secondary.main,
    },
    '&:nth-child(2n)': {
      '& .latest-products__card-media': {
        background: theme.palette.primary.main,
      },
    },
  },
}));
