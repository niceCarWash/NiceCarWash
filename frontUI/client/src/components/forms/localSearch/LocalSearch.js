import React from 'react';
import { useStyles } from './Style';
import SearchIcon from '@material-ui/icons/Search';
import { InputBase } from '@material-ui/core';
const LocalSearch = ({ keyword, setKeyword }) => {
  const handleSearchChange = e => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        type="search"
        placeholder="Search…"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ 'aria-label': 'search' }}
        value={keyword}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default LocalSearch;
