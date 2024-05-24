let products = [];
let idCounter = 0;
let totalPrice = 0;

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const imageURL = document.getElementById("imageURLInput").value;
  const productName = document.getElementById("priceInput").value;
  const price = document.getElementById("priceInput").value;

  const newProduct = {
    id: ++idCounter,
    productName: productName,
    price: price,
    imageURL: imageURL,
  };
  products.push(newProduct);
  displayProducts(newProduct);
  document.getElementById("form").reset();
});

document.getElementById("addtocart-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const checkedProduct = document.querySelectorAll(
    '#display-product input[type="checkbox"]:checked'
  );
  //ทำ ele ที่จะใส่ให้ว่างก่อน
  document.getElementById("display-product").innerHTML="";
  checkedProduct.forEach((checkedProduct) => {
    const productId = parseInt(checkedProduct.id);
    let product = products.find((product) => product.id === productId);

    addToCart(product);
  });
});

function displayProducts(product) {
  const displayProduct = document.getElementById("display-product");
  const card = document.createElement("label");
  card.className = "relative cursor-pointer";
  card.innerHTML = `<input
    type="checkbox"
    name="image"
    id="${product.id}"
    class="sr-only peer"
    "
  />
  <div
    class="overflow-hidden rounded-lg bg-white shadow-md ring ring-transparent peer-checked:ring-purple-400"
  >
    <div>
      <img
        class="h-28 w-48 object-cover"
        src="${product.imageURL}"
      />
    </div>
    <div class="p-2.5">
      <h3
        class="text-lg font-bold tracking-wide text-gray-700"
      >
        ${product.productName}
      </h3>
      <h4 class="text-sm text-gray-500" >
        $ ${product.price}
      </h4>
    </div>
  </div>`;
  displayProduct.appendChild(card);
}

function addToCart(product) {
  const displayCart = document.getElementById("display-cart");
  const card = document.createElement("div");
  card.className = "relative cursor-pointer flex items-center justify-between bg-white shadow-md ring ring-transparent rounded-lg";
  
  card.innerHTML = `<div id="${product.id}" class="overflow-hidden rounded-tl-lg rounded-bl-lg ">
  <img
      class="h-16 w-26 object-cover"
      src="${product.imageURL}"
    />
</div>
<h3
      class="text-lg font-bold tracking-wide text-gray-700"
    >
    ${product.productName}
    </h3>
    <h4 class="text-sm text-gray-500 pr-4" >
      ${product.price}
    </h4>`;
//   const card = document.createElement("label");
//   card.className = "relative cursor-pointer";
//   card.innerHTML = `<input
//       type="checkbox"
//       name="image"
//       id="${product.id}"
//       class="sr-only peer"
//       "
//     />
//     <div
//       class="overflow-hidden rounded-lg bg-white shadow-md ring ring-transparent peer-checked:ring-purple-400"
//     >
//       <div>
//         <img
//           class="h-28 w-48 object-cover"
//           src="${product.imageURL}"
//         />
//       </div>
//       <div class="p-2.5">
//         <h3
//           class="text-lg font-bold tracking-wide text-gray-700"
//         >
//           ${product.productName}
//         </h3>
//         <h4 class="text-sm text-gray-500" >
//           $ ${product.price}
//         </h4>
//       </div>
//     </div>`;
  displayCart.appendChild(card);
}
