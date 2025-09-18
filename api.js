 const fetchProduct = () => {
    fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => console.log(data.products))
    .catch((err) => console.error(err));
 };
 fetchProduct();

//Asynchronous function
const fetchProducts =  async () => {
 try {
  const response = await fetch("https://dummyjson.com/products")
  const data = await response.json()
  console.log(data)
 }  catch(err) {
    console.error("error 404", err);
 }
};
fetchProducts();