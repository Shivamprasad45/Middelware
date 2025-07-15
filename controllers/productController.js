// GET /products
const getAllProducts = (req, res) => {
  res.send("Fetching all products");
};

// GET /products/:id
const getProductById = (req, res) => {
  const { id } = req.params;
  res.send(`Fetching product with ID: ${id}`);
};

// POST /products
const addProduct = (req, res) => {
  res.send("Adding a new product");
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};
