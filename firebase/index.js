var admin = require('firebase-admin');

firebaseAdminApp = admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(
      Buffer.from(process.env.GOOGLE_CONFIG_BASE64, 'base64').toString('ascii')
    )
  ),
});
defaultAuth = admin.auth();
