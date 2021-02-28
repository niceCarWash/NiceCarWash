// import firebase from 'firebase';
// import createOrUpdateUser from './auth/createOrUpdateUser';
// import { useDispatch, useSelector } from 'react-redux';

// const roleBasedRedirect = (res) => {
//   if (res.data.role === 'admin') {
//     history.push('/admin/dashboard');
//   } else {
//     history.push('/user/history');
//   }
// };

// createToken = async () => {
//   let dispatch = useDispatch();
//   const user = firebase.auth().currentUser;
//   const token = user && (await user.getIdToken());
//   createOrUpdateUser(token)
//     .then((res) => {
//       dispatch({
//         type: 'LOGGED_IN_USER',
//         payload: {
//           name: user.name,
//           email: user.email,
//           token: token,
//           role: user.role,
//           _id: user._id,
//         },
//       });
//       roleBasedRedirect(res);
//       console.log(user);
//     })
//     .catch((err) => console.log(err));
//   return payload;
// };

// export default createToken;
