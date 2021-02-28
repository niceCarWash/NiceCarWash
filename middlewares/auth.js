var admin = require('firebase-admin');

var serviceAccount = require('../config/fbServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
defaultAuth = admin.auth();

exports.authCheck = async (req, res, next) => {
  let auth = req.headers.authorization;
  try {
    let user = await defaultAuth.verifyIdToken(auth);
    req.user = user;
    console.log(user);
    next();
  } catch (err) {
    console.log(err);
    // res.status(401).json(err);
  }
};

// exports.authCheck = (req, res, next) => {
//   const idToken = req.headers.authtokenResult;
//   defaultAuth
//     .verifyIdToken(idToken)
//     .then((user) => {
//       req.user = user;
//       next();
//     })
//     .catch((err) => {
//       console.log(idToken);
//       console.log(err);
//       res.status(401).json({
//         err: 'Invalid or expired token',
//       });
//     });
// };
