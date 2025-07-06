const { runIncrementalBackup } = require('../firebase-admin/incrementalBackup');

// Path to your service account key JSON file
// const serviceAccountPath = '../accountancy-app-dev-firebase-adminsdk-da82p-e37a0a5c28.json'; // Path to your key

// runIncrementalBackup(serviceAccountPath).catch(console.error);


const constants = require('./constants')

runIncrementalBackup(constants.serviceAccountPath).catch(console.error);