
import producto1 from "../assets/img/producto1.jpg"
import producto2 from "../assets/img/producto2.png"
import producto3 from "../assets/img/producto3.jpg"
import producto4 from "../assets/img/producto4.png"

const productos = [
    {id: 1, name: "Rompevientos", description:"Campera Adidas", price: 7000, img: producto1},
    {id: 2,name: "Zapatillas", description:"Converse React Hi 90s", price: 12000, img: producto2},
    {id: 3, name: "Camiseta de futbol", description:"Camiseta CAI Adidas 1996", price: 7000, img: producto3},
    {id: 4, name: "Short Nike", description:"Short Nike vintage ", price: 3000, img: producto4}
]

export const getFetch = new Promise((result)=>{
    setTimeout(()=> {
        result(productos)
    },2000)
}); 



// const task = new Promise((resolve, reject)=>{
//     //Acciones que pueden ser o no asincronicas
//     resolve("200 ok")

// })  //Instanciar objeto
 // task
    // .then(dataRes => {return "La c*%&$! de tu madre cubilla!, que me tiraaa´!" })
    // .catch(err => console.log(err))
    // .then(resp => console.log(resp))
    // .finally(()=> console.log("Siempre se ejecuta al final"))