import DombulDOM from "./lib/Dombul";
import productList from "./aciklama";

const GatesCash = Number.MAX_SAFE_INTEGER;
// Set dom value
document.getElementById("jsGatesCash").innerText = GatesCash;

let DataBank = productList.map((product)=>{
  return {
    type:"div",
    props:{
      id: product.id,
      className:"item",
      children:[
        {
          type:"img", 
          props:{
            className:"item-resim",
            src:product.img,
          }
        },
        {
          type:"span",
          props:{
            className:"item-baslik",
            innerText:product.name,
          }
        },
        {
          type:"span",
          props:{
            innerText:"Fiyat : ",
            className:"item-fiyat",
            children:[
              {
                type:"TEXT",
                props:{
                  innerText : product.price
                  }
              }
            ]
          }
        },
        {
          type:"span",
          props:{
            innerText:"Alınabilecek adet : ",
            className:"item-alinabilecek-adet",
            children:[
              {
                type:"TEXT",
                props:{
                  innerText : Math.floor(GatesCash/product.price)
                  }
              }
            ]
          }
        },
      ]
    }
  }
});

DataBank.forEach((item)=>{
  DombulDOM.render(item,document.getElementById("items"))
})
