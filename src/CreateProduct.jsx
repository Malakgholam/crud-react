import React, { useState, useEffect } from 'react';

const CreateProduct = ({ addProduct, clearForm, productToEdit }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setCategory(productToEdit.category);
      setPrice(productToEdit.price);
      setDescription(productToEdit.description);
    } else {
      handleClear();
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !price || !description) {
      alert('All fields must be filled out.');
      return;
    }
    addProduct({ name, category, price, description });
    handleClear();
  };

  const handleClear = () => {
    setName('');
    setCategory('');
    setPrice('');
    setDescription('');
    clearForm();
  };

  return (
    <div className="w-75 mx-auto py-5 px-3 rounded-3 shadow-lg mt-5">
      <h1>CRUD Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Category</label>
          <input
            type="text"
            className="form-control"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Price</label>
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Description</label>
          <textarea
            className="form-control"
            rows="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          {productToEdit ? 'Update Product' : 'Add Product'}
        </button>
        <button type="button" className="btn btn-secondary mx-2" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
