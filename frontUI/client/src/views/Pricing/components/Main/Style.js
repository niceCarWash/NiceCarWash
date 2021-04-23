import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
  pagePaddingTop: {
    paddingTop: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
    },
  },
  sectionContainer: {
    backgroundColor: theme.palette.primary.dark,
    paddingBottom: theme.spacing(20),
    borderRadius: '0 0 100% 0',
  },
  textWhite: {
    color: 'white',
  },
  fontWeightBold: {
    fontWeight: 'bold',
  },
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(0, 2),
  },
  toggleButtonGroup: {
    background: 'transparent',
  },
  toggleButton: {
    background: 'transparent',
    border: '1px solid white',
    padding: theme.spacing(1, 5),
  },
  toggleButtonActive: {
    backgroundColor: 'white !important',
  },
  toggleTitle: {
    textTransform: 'capitalize',
  },
  toggleTitleActive: {
    color: theme.palette.primary.main,
  },
  pricingContainer: {
    position: 'relative',
    marginTop: theme.spacing(-20),
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  cardPricing: {
    '& .countup-number__count-wrapper': {
      textAlign: 'left',
      marginBottom: 0,
      fontWeight: 'bold',
    },
  },
}));
