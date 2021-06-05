import { makeStyles} from '@material-ui/core/styles';
export const useStyles = makeStyles(theme => ({
    root: {
      height: '100%',
      width: '100%',
      position: 'relative',
    },
    section: {
      [theme.breakpoints.down('sm')]: {
        paddingTop: 0,
      },
    },
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
      },
    },
    cover: {
      marginLeft: theme.spacing(-2),
      marginRight: theme.spacing(-2),
      display: 'flex',
      justifyContent: 'center',
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(-8),
        marginRight: theme.spacing(-8),
      },
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '47vw',
        maxWidth: 740,
        height: '100%',
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 0,
      },
    },
    image: {
      width: '100%',
      height: 300,
      objectFit: 'cover',
      [theme.breakpoints.up('md')]: {
        maxWidth: '100%',
        height: '100%',
      },
    },
    content: {
      flex: '0 0 100%',
      maxWidth: '100%',
      [theme.breakpoints.up('md')]: {
        flex: '0 0 50%',
        maxWidth: '50%',
      },
    },
  }));