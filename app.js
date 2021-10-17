//imports
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

//const
const app = express();
const url = 'mongodb+srv://cristian:Bandit0bandit@gestion.l08kl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//middleware
app.use(morgan('tiny'));
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use('/api', require('./routes/accountRoutes'));
app.use('/api', require('./routes/roomsBd'));

//middleware for vue js
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

//connection BD
mongoose.connect("mongodb+srv://cristian:Bandit0bandit@gestion.l08kl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("Base de datos conectada!"))
    .catch((err) =>
        console.log(err));
var db = mongoose.connection;
db.once("open", () => {
    console.log("Connected to mongoDB");
});
//port
app.set('puerto', process.env.PORT || 3000);
app.listen(app.get('puerto'), () => {
    console.log('listening on port: ' + app.get('puerto'));
});