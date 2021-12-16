import React from 'react'
import getOneProduct from '../../helpers/getOneProduct';
import { useState, useEffect } from 'react';
import  ItemDetail  from '../ItemDetail/ItemDetail.jsx';

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true)
  console.log(item);

  useEffect(() => {
    getOneProduct.then((res) => setItem(res)).catch((err) => console.log(err))
    .finally(()=> setLoading(false));
  });

  return (
    <div>
       {loading ? <h2>Cargando...</h2> :
      <ItemDetail item={item} />}
    </div>
  );
};

