import DombulDOM from "./lib/Dombul";
import parseLira, { parseFromLira } from "./lib/Lira";
import productList from "./aciklama";

const GatesCash = Number.MAX_SAFE_INTEGER;
// Set dom value
document.getElementById("jsGatesCash").innerText = parseLira(GatesCash);

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
                  innerText : parseLira(product.price)
                  }
              }
            ]
          }
        },
        {
          type:"span",
          props:{
            innerText:"Alınabilecek adet : ",
            className:"item-adet",
            children:[
              {
                type:"span",
                props:{
                  id:"js-buyable-"+product.id,
                  innerText : Math.floor(GatesCash/product.price)
                }
              }
            ]
          }
        },
        {
          type:"span",
          props:{
            innerText:"Alınan adet : ",
            className:"item-adet",
            children:[
              {
                type:"TEXT",
                props:{
                  id:"count-" + product.id,
                  innerText : 0
                }
              }
            ]
          }
        },
        {
          type:"button",
          props:{
            id:"button-increment-" + product.id,
            innerText:"Satın Al!",
            className:"item-button",
            onClick:()=>{
              // Counter selector              
              let counter = document.getElementById("count-" + product.id);
              counter.innerText = parseInt(counter.innerText) + 1;
              // Buyable selector
              let buyable = document.getElementById("js-buyable-" + product.id);
              buyable.innerText = parseInt(buyable.innerText) - 1;
              // Total money selector
              let totalMoney = document.getElementById("jsGatesCash");
              parseFromLira(totalMoney.innerText) - product.price > 0
                ? totalMoney.innerText = parseLira(parseFromLira(totalMoney.innerText) - product.price)
                : totalMoney.innerText = 0;
            }
          }
        }
      ]
    }
  }
});

DataBank.forEach((item)=>{
  DombulDOM.render(item,document.getElementById("items"))
})

console.log(parseLira(9500000));
