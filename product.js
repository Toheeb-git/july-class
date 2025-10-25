//  const fetchProduct = () => {
//     fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => console.log(data.products))
//     .catch((err) => console.error(err));
//  };
//  fetchProduct();

// //Asynchronous function
// const fetchProducts =  async () => {
//  try {
//   const response = await fetch("https://dummyjson.com/products")
//   const data = await response.json()
//   console.log(data)
//  }  catch(err) {
//     console.error("error 404", err);
//  }
// };
// fetchProducts();
const productContainer = document.querySelector("#productContainer");

const fetchProduct = () => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) =>{
       products = data.products;
       let LimitedProduct = products.slice(0, 6)

      LimitedProduct.forEach((p) => {
         const productEl = document.createElement("div");
         productEl.classList.add("product")
         productEl.innerHTML = ` <img src=${ p.thumbnail}>
         <h3>${p.title}</h3>
         <p>${p.description.substring(0, 60)}<p/>
         <span>${p.price}<span/>
          <div class="brand">${p.category}</div>
          <div class= "btn"><button>Add to cart</button></div>`

         productContainer.appendChild(productEl);
      });
    })
    .catch((err) => console.error(err));
 };
 fetchProduct();
