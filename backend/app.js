const express = require('express');

const app = express();


app.use((req,res, next) => {
    console.log('requete  recu ^^');
    next();
});
app.use((req,res, next) => {
    res.status(201);
    next();
});
app.use((req,res, next) => {
    res.json({ message: 'requete bien recu ^^'});
    next();
});
app.use((req,res, next) => {
    console.log('reponse  envoye ^^');
    next();
});
app.use((req,res, next) => {
    console.log('test inutile ^^');
    next();
});

module.exports = app;
