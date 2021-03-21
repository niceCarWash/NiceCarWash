import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './Style';
import { loadUsers } from '../../../../redux/actions/user_actions/loadUsersAction';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Box,
  Button,
} from '@material-ui/core';
import Title from '../Title';
import { LocalSearch } from 'components/forms';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Services = props => {
  const { className, ...rest } = props;
  const classes = useStyles();
  const [users, setUsers] = useState([]);

  // Users Search Step 1
  const [keyword, setKeyword] = useState('');

  const { auth } = useSelector(state => ({ ...state }));
  const userLoad = () => {
    const authToken = auth.token;
    loadUsers(authToken).then(res => {
      setUsers(res.data);
    });
  };
  useEffect(() => {
    userLoad();
  }, []);

  const searched = keyword => user => user.name.toLowerCase().includes(keyword);
  return (
    <div className={className} {...rest}>
      <Title> List Of Users</Title>
      {/* step 2 and step 3 */}
      <LocalSearch keyword={keyword} setKeyword={setKeyword} />

      {users.filter(searched(keyword)).map(user => (
        <Box key={user._id} m={2} boxShadow={3}>
          <Table style={{ backgroundColor: '#e8f5fc' }}>
            <TableHead>
              <TableRow>
                <TableCell align="left">User Name</TableCell>
                <TableCell align="left">User Email</TableCell>
                <TableCell align="left">User Role</TableCell>
                <TableCell align="left">Date Joined</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">{user.name}</TableCell>
                <TableCell align="left">{user.email}</TableCell>
                <TableCell align="left">{user.role}</TableCell>
                <TableCell align="left">{user.createdAt}</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Button variant="contained" color="primary">
            Edit
          </Button>
          {'                    '}
          <Button variant="contained" color="secondary">
            Delete
          </Button>
        </Box>
      ))}
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Services;
