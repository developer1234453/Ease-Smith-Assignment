import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import AddToCartModal from './components/AddToCartModal';
import Pagination from './components/Pagination';
import ThankYouPage from './pages/ThankYouPage';
import './App.css'; 

const mockProducts = [
  { id: 1, name: 'Product 1', price: '$10', image: 'product1.jpg' },
  { id: 2, name: 'Product 2', price: '$20', image: 'product2.jpg' },
  { id: 3, name: 'Product 3', price: '$15', image: 'product3.jpg' },
  { id: 4, name: 'Product 4', price: '$30', image: 'product4.jpg' },
  { id: 5, name: 'Product 5', price: '$25', image: 'product5.jpg' },
  { id: 6, name: 'Product 6', price: '$18', image: 'product6.jpg' },
  { id: 7, name: 'Product 7', price: '$40', image: 'product7.jpg' },
  { id: 8, name: 'Product 8', price: '$35', image: 'product8.jpg' },
  { id: 9, name: 'Product 9', price: '$22', image: 'product9.jpg' },
  { id: 10, name: 'Product 10', price: '$50', image: 'product10.jpg' },
  { id: 11, name: 'Product 11', price: '$12', image: 'product11.jpg' },
  { id: 12, name: 'Product 12', price: '$60', image: 'product12.jpg' },
  { id: 13, name: 'Product 13', price: '$8', image: 'product13.jpg' },
  { id: 14, name: 'Product 14', price: '$55', image: 'product14.jpg' },
  { id: 15, name: 'Product 15', price: '$28', image: 'product15.jpg' },
  { id: 16, name: 'Product 16', price: '$42', image: 'product16.jpg' },
  { id: 17, name: 'Product 17', price: '$38', image: 'product17.jpg' },
  { id: 18, name: 'Product 18', price: '$45', image: 'product18.jpg' },
  { id: 19, name: 'Product 19', price: '$32', image: 'product19.jpg' },
  { id: 20, name: 'Product 20', price: '$70', image: 'product20.jpg' },
  { id: 21, name: 'Product 21', price: '$14', image: 'product21.jpg' },
  { id: 22, name: 'Product 22', price: '$16', image: 'product22.jpg' },
  { id: 23, name: 'Product 23', price: '$48', image: 'product23.jpg' },
  { id: 24, name: 'Product 24', price: '$26', image: 'product24.jpg' },
  { id: 25, name: 'Product 25', price: '$90', image: 'product25.jpg' },
];

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const currentProducts = mockProducts.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  const openModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div className="App">
      <Header />
      <Routes> 
        <Route 
          path="/" 
          element={
            <div>
              <div className="product-list">
                {currentProducts.map(product => (
                  <ProductCard key={product.id} product={product} openModal={openModal} />
                ))}
              </div>
              <Pagination 
                currentPage={currentPage} 
                totalPages={Math.ceil(mockProducts.length / productsPerPage)} 
                onPageChange={setCurrentPage} 
              />
              {showModal && <AddToCartModal product={selectedProduct} closeModal={closeModal} />}
            </div>
          }
        />
        <Route path="/thank-you" element={<ThankYouPage />} />
      </Routes>
    </div>
  );
}

export default App;
