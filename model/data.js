
// const Firestore = require('@google-cloud/firestore');

// const db = new Firestore({
//     projectId: 'linear-listener-324519 ',
//     keyFilename: '../serviceAccount.json',
// });

const admin = require('firebase-admin');

// const serviceAccount = require('./serviceAccount.json');

// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount)
// });

admin.initializeApp();

const db = admin.firestore();



module.exports = { db }



