import React from 'react';
import clsx from 'clsx';
import {
  colors,
  makeStyles,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Button,
} from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Icon } from 'components/atoms';
import {
  Categories,
  EcomHero,
  FeaturedProducts,
  LatestProducts,
  News,
  Newsletter,
  Overview,
  Products,
  QuickSearch,
  Reviews,
  Sales,
  Hero,
} from './components';
import {
  categories,
  featuredProducts,
  mostSoldProducts,
  news,
  latestProducts,
  reviews,
} from './data';

const useStyles = makeStyles(theme => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  sectionFeaturedProducts: {
    background: theme.palette.secondary.main,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
  pagePaddingTop: {
    padding: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
  },
  sectionAlternate: {
    '& .section-alternate__content': {
      padding: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(5),
      },
    },
  },
  searchInputContainer: {
    background: theme.palette.alternate.main,
    padding: theme.spacing(2),
    boxShadow: '0 4px 14px 0 rgba(0, 0, 0, 0.11)',
    borderRadius: theme.spacing(1),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0 !important',
    },
    '& .MuiInputAdornment-positionStart': {
      marginRight: theme.spacing(2),
    },
    '& .MuiOutlinedInput-adornedStart': {
      paddingLeft: 0,
    },
    '& .MuiOutlinedInput-input': {
      padding: 0,
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  searchButton: {
    maxHeight: 45,
    minWidth: 135,
    [theme.breakpoints.down('sm')]: {
      minWidth: 'auto',
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Section className={classes.pagePaddingTop}>
        <div className={classes.searchInputContainer} data-aos="fade-up">
          <FormControl fullWidth variant="outlined">
            <OutlinedInput
              startAdornment={
                <InputAdornment position="start">
                  <Icon
                    fontIconClass="fas fa-search"
                    fontIconColor={colors.blueGrey[900]}
                  />
                </InputAdornment>
              }
              placeholder="Search for Products"
            />
          </FormControl>
          <Button
            color="primary"
            variant="contained"
            size="large"
            className={classes.searchButton}
          >
            Search
          </Button>
        </div>
      </Section>

      <Hero themeMode={themeMode} />
      <Section className={classes.pagePaddingTop}>
        <EcomHero />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Overview />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <Categories data={categories} />
      </Section>
      <SectionAlternate
        className={clsx(
          classes.sectionNoPaddingTop,
          classes.sectionFeaturedProducts,
        )}
      >
        <FeaturedProducts />
      </SectionAlternate>
      <Section>
        <Products data={featuredProducts} />
      </Section>
      <SectionAlternate>
        <Sales data={mostSoldProducts} />
      </SectionAlternate>
      <Section>
        <News data={news} />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <LatestProducts data={latestProducts} />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <QuickSearch />
      </Section>
      <SectionAlternate className={classes.reviewSection}>
        <Reviews data={reviews} />
      </SectionAlternate>
      <Section>
        <Newsletter />
      </Section>
    </div>
  );
};

export default IndexView;
