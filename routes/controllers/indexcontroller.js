const products = require('../../models/products');
exports.gettable = (req, res, next) => {
    products.fetchAll().then((products) => {
        res.send(products);
    })
};
exports.gettable2 = (req, res, next) => {
    res.render('add')

};



exports.posttable = async (req, res, next) => {
    let data = req.body;
    let val = await new products(data).save()
    res.send(val)
};


exports.gettable3 = async (req, res, next) => {
    let id = req.params.id;
    let val = await products.where({ id: id }).fetch({ require: false });
    res.send(val);
};




exports.patchtable = async (req, res, next) => {
    let data = req.body;

    console.log(data);
    let val = await new products({ id: data.id }).save(data, { patch: true });

    res.send(val);
};

exports.deletetable = async (req, res, next) => {

    let val = await new products({ id: req.params.id }).destroy()

    res.send(val);
};
