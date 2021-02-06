import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import postRouters from './routes/posts.js';


const app = express();
app.use(bodyParser.json({limit : "30mb", extended : true}));
app.use(bodyParser.urlencoded({limit : "30mb", extended : true}));
app.use(cors());

// 

app.use('/posts', postRouters);

const url = "mongodb+srv://saikat:saikat1095@cluster0.htwdq.mongodb.net/mern-memory?retryWrites=true&w=majority";
const port = process.env.PORT || 5000 ;

mongoose.connect(url, {useNewUrlParser : true, useUnifiedTopology : true})
    .then(()=> app.listen(port, ()=> console.log(`Server runing on port ${port}`)))
    .catch((err)=> console.log(err.message));

mongoose.set('useFindAndModify', false); // this make sure we don't get error on console.
