const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    birthday: String,
    createdAt: { type: Date, default: Date.now }
});

function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;
}

module.exports = new User('rodney', '1972-07-24');
//module.exports = mongoose.model("User", UserSchema);