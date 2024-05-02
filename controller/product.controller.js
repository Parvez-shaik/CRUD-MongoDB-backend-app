const Product = require("../models/products.model.js");

const getProducts = async(req, res) => {
    try {

        const product = await Product.find({});
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const postProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const putProduct = async(req, res) => {
    try {
        const { id } = req.params;
        console.log(res.body);
        console.log(res.params);
        const product = await Product.findByIdAndUpdate(id, req.body);

        if (!product) {
            res.status(404), express.json({ message: "Product not found." })
        }

        const UpdatedProduct = await Product.findById(id);

        res.status(200).json(UpdatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


const delProduct = async(req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            res.status(404);
        }
        const AllProduct = await Product.find({})
        res.status(200).json(AllProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getProducts,
    getProduct,
    postProduct,
    putProduct,
    delProduct
}