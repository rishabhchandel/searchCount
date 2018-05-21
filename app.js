var express = require('express')
db = require("./db")
const mongoose = require('mongoose');
var app = express()
var path = require("path");
const Keywords = mongoose.model('Keyword');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

app.get('/', function(req, res) {
	res.render('index', {markup: "rishabh"});
})

app.get('/key', async function(req, res) {
	console.log(req.query.name);
	let word = req.query.name;
	//word = "/^" + word + "/"
	let dbrst = await Keywords.update({
		word: word
	}, {
		$inc: {
			count: 1
		}
	})

	if (dbrst.n == 0) {
		await(new Keywords({word: word, count: 1})).save()
	}
	console.log(dbrst);
	res.send(dbrst);
})

app.get('/keys', async function(req, res) {
	console.log(req.query.name);
	let word = req.query.name;
	//word = "/^" + word + "/"
	let dbrst = await Keywords.find({
		word: {
			$regex: "^" + word
		}
	}, {
		word: 1,
		count: 1,
		_id: 0
	}, {
		limit: 5,
		sort: {
			count: -1
		}
	})
	res.send(dbrst);
})
app.listen(3000)
