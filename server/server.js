require('dotenv').config();
const express = require("express");
const path = require('path');
const app = express();
const { table } = require('./db/database');
const { PORT } = process.env;


app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(express.json());
app.use(express.text());

app.listen(PORT, ()=>{
    console.log("Listening on 8080 Port💡")
})

app.get('/api/getKoUnivs', (req, res)=>{
    table.find({}, (err, koUnivs) => {
        if (err) {
            res.end();
            return;
        }
        res.json(koUnivs);
    })
    .select('koUniv')
    .distinct('koUniv');
});

app.post('/api/getContinents', (req, res)=>{
    const selectedKoUniv = req.body.selKoUniv;
    table.find({koUniv : selectedKoUniv}, (err, tables)=>{
        if(err){
            res.end();
            return;
        }
        res.json(tables);
    })
    .select('continent')
    .distinct('continent');
});

app.post('/api/getCountries', (req,res)=>{
    const postData = req.body;
    table.find({koUniv : postData.selKoUniv, continent : {$in:postData.selContinent.split(',')}}, (err, tables)=>{
        if(err){
            res.end();
            return;
        }
        res.json(tables);
    })
    .select('country')
    .distinct('country');
});

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, '/build/index.html'));
})