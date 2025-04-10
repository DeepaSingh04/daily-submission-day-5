const Product = require("../models/productModel");

const getProducts = async (req, res) => {
  try {
    const { category, minPrice, maxPrice, minRating, sortBy, page = 1, limit = 5 } = req.query;

    const filter = {};

    if (category) {
      filter.category = category;
    }

    if (minPrice && maxPrice) {
      filter.price = { $gte: minPrice, $lte: maxPrice };
    }

    if (minRating) {
      filter.rating = { $gte: minRating };
    }

    const sortOption = {};
    if (sortBy) {
      sortOption[sortBy] = 1; // ascending
    }

    const products = await Product.find(filter)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { getProducts };
