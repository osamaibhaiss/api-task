async function products(){
  const response = await fetch("https://dummyjson.com/products");
  const result = await response.json();
  let details = result.products;
  
  const final = details.map(function(e){
    return `
      <div class="product">
      
        <h3>Products Name ${e.title}</h3>
        <p>Price = ${e.price}</p>
        <img src="${e.images[0]}" alt="${e.title}">
      </div>
    `
  }).join('');
  
  document.getElementById('products').innerHTML = final;
}

products();