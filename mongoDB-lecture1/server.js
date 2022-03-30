const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

var router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Server Setup

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World');
});

const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/database-intro';
mongoose.connect(url, {useNewUrlParser: true});

const db = mongoose.connection;

db.once('open', _ => {
    console.log('Database connected:', url)
});

db.on('error', err => {
    console.error('connection error', url)
});

const Schema = mongoose.Schema;

const item = new Schema({
    title: String,
    task: String,
    date: String,
    urgency: Number,
});

// 1 is not urgent, but 3 is urgent.

const TODO = mongoose.model('TODO', item);

// CURD Operations for MongoDB & Express

// Post

router.post('/db', (req, res) => {
    const todo = new TODO({
        title: req.body.title,
        task: req.body.task,
        date: req.body.date,
        urgency: req.body.urgency
    });
    todo.save((error, document) => {
        if (error) {
            res.json({status: 'failure'});
        } else {
            res.json({
                status: 'success',
                id: todo._id,
                content: req.body
            });
        }
    });
});

// Retrieve

router.get('/db/all', (req, res) => {
    TODO.find().then((todos) => {
        res.json({message: 'Return all todos.', todos: todos});
    });
});