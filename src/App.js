import React, { useState, useEffect } from 'react';
import CreateProduct from './CreateProduct';
import ProductsTable from './ProductsTable';
import SearchBar from './SearchBar';

const App = () => {
  const [products, setProducts] = useState([]);
  const [productToEdit, setProductToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Load products from local storage on initial render
  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  // Save products to local storage whenever products state changes
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    if (productToEdit !== null) {
      // Update existing product
      const updatedProducts = products.map((p, index) =>
        index === productToEdit.index ? product : p
      );
      setProducts(updatedProducts);
      setProductToEdit(null);
    } else {
      // Add new product
      setProducts([...products, product]);
    }
    clearSearch();
  };

  const editProduct = (index) => {
    setProductToEdit({ ...products[index], index });
    clearSearch();
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
    clearSearch();
  };

  const clearForm = () => {
    setProductToEdit(null);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const clearSearch = () => {
    setSearchQuery('');
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <CreateProduct
        addProduct={addProduct}
        clearForm={clearForm}
        productToEdit={productToEdit}
      />
      <SearchBar handleSearch={handleSearch} searchQuery={searchQuery} />
      <ProductsTable
        products={filteredProducts}
        editProduct={editProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
};

export default App;
