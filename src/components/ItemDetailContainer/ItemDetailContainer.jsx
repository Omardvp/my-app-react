import React from 'react'
// import getOneProduct from '../../helpers/getOneProduct';
import { useState, useEffect } from 'react';
import  ItemDetail  from '../ItemDetail/ItemDetail.jsx';
import { getFetch } from '../../helpers/getFetch';
import { useParams } from 'react-router-dom';
import {productos} from "../../helpers/getFetch"

export const ItemDetailContainer = () => { 
const [loading, setLoading] = useState(true)
    const [Item, setItem] = useState({})
    const {id} = useParams()

    const getItem = new Promise((resolve,reject)=>{
      setTimeout(() => {
          resolve(productos)
      }, 2000);
  })
   
    useEffect(() => {        
        
            
        getItem.then(resultProducts=>{
          resultProducts.filter((resultProduct)=>{
              if (resultProduct.id === parseInt(id)) {
                  setItem(resultProduct)
                  setLoading(false)
              }
          })
      })

           
               
    }, []) 

    return (
      <div>
         {loading ? <h2>Cargando...</h2> :
        <ItemDetail Item={Item} />}
      </div>
    )

}

