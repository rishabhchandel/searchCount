const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/search');
const Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

const keyword = new Schema({
	word: {
		type: String,
		unique: true
	},
	count: Number
});
keyword.index({
	word: 1
}, {unique: true});
mongoose.model('Keyword', keyword);
