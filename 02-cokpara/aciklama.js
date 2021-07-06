/*

Bill Gates'in parasını harca uygulaması

Ornek verelim, 

Bill Gates'in parası Number.MAX_SAFE_INTEGER olsun. Aşağıdaki ürün listesini (productList) kullanarak bu parayı harcayabileceğimiz bir uygulama yapalım.

1) Uygulama açıldığında aşağıdaki ürünler ekrana gelsin ve ekranda her ürün için [fotoğraf, ürün, ekle butonu] içeren bir kart yer alsın.
2) Ekle butonunun üzerine geldiğımiz zaman o üründen kaç tane alabileceğimizi görelim
3) Ekle butonuna bastığımız zaman ürün kartının yanına bu üründen kaç tane eklediğimizi görelim.
4) Paramız bittiyse ürün ekleyemeyelim
5) Tüm kartların üzerinde ne kadar paramız kaldığını gösteren bir yazı yer alsın Kalan Para: xxxx
*/

const productList = [
  {
    id: 1,
    name: "Kola",
    price: 4,
    img: "https://i.sozcu.com.tr/wp-content/uploads/2016/01/19/diyet-kola.jpg",
  },
  {
    id: 2,
    name: "Iskender",
    price: 30,
    img: "https://i.lezzet.com.tr/images-xxlarge-recipe/ev-yapimi-iskender-33bd7089-fa36-4398-95f8-02c6463ea27c.jpg",
  },
  {
    id: 3,
    name: "Nvidia RTX 3090",
    price: 45000,
    img: "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/msi/thumb/109368_large.jpg",
  },
  {
    id: 4,
    name: "Bitcoin",
    price: 295000,
    img: "https://i.sozcu.com.tr/wp-content/uploads/2021/05/20/iecrop/shutterstock_1682134423_16_9_1614005607-880x495-1_16_9_1618810385_16_9_1619157189_16_9_1621505154.jpg",
  },
  {
    id: 5,
    name: "Yat",
    price: 450000,
    img: "https://i.ytimg.com/vi/9BCZpcgsAb8/maxresdefault.jpg",
  },
  {
    id: 6,
    name: "Bahceli Ev",
    price: 9500000,
    img: "https://www.neredekal.com/res/blog/1582812421_7.jpg",
  },
  {
    id: 7,
    name: "Araba Fabrikası",
    price: 120000000,
    img: "https://i.ytimg.com/vi/rfMkp55oTv0/maxresdefault.jpg",
  },
  {
    id: 8,
    name: "Quantum Bilgisayar",
    price: 200000000,
    img: "https://venturebeat.com/wp-content/uploads/2020/09/d-wave-advantage-system.jpeg?fit=1600%2C800&strip=all",
  },
];

export default productList;
