var admin = require('firebase-admin');
const express = require('express');
const app = express();

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});