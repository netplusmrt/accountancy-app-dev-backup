const firebaseExport = require("../firebase-admin/export"); 

// Path to your service account key JSON file
firebaseExport.exportDataPerUIDAndYear('../accountancy-app-dev-firebase-adminsdk-da82p-e37a0a5c28.json').catch(console.error);