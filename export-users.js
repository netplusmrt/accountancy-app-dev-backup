const firebaseExport = require("../firebase-admin/exportUsers"); 

const constants = require('./constants')
firebaseExport.exportUsers(constants.serviceAccountPath).catch(console.error);