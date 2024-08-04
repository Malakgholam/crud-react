import React from 'react';

const ProductsTable = ({ products, editProduct, deleteProduct }) => {
  return (
    <div className="w-75 mx-auto my-5">
      {products.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => editProduct(index)}
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => deleteProduct(index)}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="alert alert-warning" role="alert">
          No products available. Please add some products.
        </div>
      )}
    </div>
  );
};

export default ProductsTable;
