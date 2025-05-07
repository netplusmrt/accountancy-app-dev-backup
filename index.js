const firebaseExport = require("../firebase-admin/export"); 

// Path to your service account key JSON file
const serviceAccountPath = '../accountancy-app-dev-firebase-adminsdk-da82p-e37a0a5c28.json';

firebaseExport.exportDataPerUIDAndYear(serviceAccountPath).catch(console.error);