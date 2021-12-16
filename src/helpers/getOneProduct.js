import producto1 from "../assets/img/producto1.jpg"

const oneProduct = {
    id: 1, name: "Rompevientos", description:"Campera Adidas", price: 7000, img: producto1}
  ;

const getOneProduct = new Promise((resolve) => {
    setTimeout(() => {
      resolve(oneProduct);
    }, 2000);
  });
  
  export default getOneProduct;