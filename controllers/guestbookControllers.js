const guestbookDAO = require('../models/guestbookModel');
const db = new guestbookDAO("database/messages.db");

// db.init();

exports.entries_list = function(req, res) {
    res.send('<h1>Not yet implemented: show a list of guest book entries.</h1>');
    db.getAllEntries();
}
exports.landing_page = function(req, res) {
    db.getAllEntries()
        .then((list) => {
            res.render('entries', {
                'title': 'Guest Book',
                'entries': list
            });
            console.log('promise resolved');
        })
        .catch((err) => {
            console.log('promise rejected', err);
        })
}
 


exports.new_entry = function(req, res) {
    res.send('<h1>Not yet implemented: show a new entry page.</h1>');
}
exports.peters_entries = function(req, res) {
    res.send('<h1>Processing Peter\'s Entries, see terminal</h1>');
    db.getPetersEntries();
}