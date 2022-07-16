First, install react using create-react-app

Firebase
Create app on firebase. This tool allows us backend of the app, host the app and authentication.


create database from Firestore Database
    set rule for test purpose
Enable Authentication from Authentication tab > Sign-in method
Register and add firebase hosting to the app
    Install firebase cli
        npm install -g firebase-tools
    Microsfot execution policy might have to be set
        to set
            Set-ExecutionPolicy RemoteSigned
        to unset
            Set-ExecutionPolicy Restricted
TO connect firebase database to our app
    create firebase.js file
    add firebase config object to firebase.js file
    run command: npm add firebase