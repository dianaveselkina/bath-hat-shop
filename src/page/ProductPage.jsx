import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { Product } from '../components/Product/Product';
import { api } from '../utils/api';
import { useParams } from 'react-router-dom';

export const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      api.getProductById(id).then((data) => setProduct(data));
    }
  }, [id]);
  const sendReview = useCallback(
    async (data) => {
      const result = await api.addProductReview(product._id, data);
      setProduct(() => ({ ...result }));
    },
    [product._id]
  );

  const onDeleteReview = useCallback(
    async (id) => {
      const result = await api.deleteProductReview(product._id, id);
      setProduct(() => ({ ...result }));
    },
    [product._id]
  );

  return (
    <>
      {!!Object.keys(product).length ? (
        <Product
          product={product}
          sendReview={sendReview}
          onDeleteReview={onDeleteReview}
        />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
