const sampleModel = require('../models/sampleModel');

exports.showHome = (req, res) => {
    const items = sampleModel.getAll();
    res.render('index', { items });
};

exports.addItem = (req, res) => {
    sampleModel.add(req.body.item);
    res.redirect('/');
};
