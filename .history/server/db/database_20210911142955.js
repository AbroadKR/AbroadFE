require('dotenv').config();
const { MONGODB_URI } = process.env;
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect(`${MONGODB_URI}`, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', ()=> {
    console.log('Mongoose is connected!!');
});

const tableSchema = new Schema({
    id : Schema.Types.ObjectId,
    koUniv : {type : String, required : true},
    continent : {type : String, required : true},
    country : {type : String, required : true},
    city : {type : String, required : true},
    forUniv_eng : {type : String, required : true},
    forUniv_kor : {type : String, required : true},
    TO : {type : Number, required : true},
    period : {type : String, required : true},
    GPA : {type : Number, required : true},
    lang : {type : String, required : true},
 });

 const evaluationSchema = new Schema({
    id : Schema.Types.ObjectId,
    forUniv : {type : String, required : true},
    user_id : {type : String, required : true},
    avg_point : {type : Number, required : true},
    comment : {type : String, required : true},
    korean : {type : Number, required : true},
    difficulty : {type : Number, required : true},
    avg_cost : {type : Number, required : true},
    transportation : {type : Number, required : true},
    safety : {type : Number, required : true}
 });
 
 const forUnivSchema = new Schema({
    id : Schema.Types.ObjectId,
    forUniv : {type : String, required : true},
    image : {type : String, required : true}
 });

 tableSchema.path('__id');
 evaluationSchema.path('__id');
 forUnivSchema.path('__id');
 
 tableSchema.set('collection', 'table');
 evaluationSchema.set('collection', 'evaluation');
 forUnivSchema.set('collection', 'forUnivs');

 const table = mongoose.model('table', tableSchema);
 const evaluation = mongoose.model('evaluation', evaluationSchema);
 const forUniv = mongoose.model('forUnivs', forUnivSchema);

module.exports = { table, evaluation, forUniv };