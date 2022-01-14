let products = [
    {
        title: "icecream",
        category: "cream",
        price: 10,
        img: "https://images.pexels.com/photos/1352281/pexels-photo-1352281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        title: "chocolate",
        category: "muffins",
        price: 14,
        img: "https://images.pexels.com/photos/4099128/pexels-photo-4099128.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        title: "cupcake",
        category: "cake",
        price: 12,
        img: "https://images.pexels.com/photos/913136/pexels-photo-913136.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
        title: "samoosas",
        category: "bakery",
        price: 14,
        img: "https://media.istockphoto.com/photos/samoosas-and-half-moons-picture-id1354269605?s=612x612"
    },
];
//reading products on screen
function readProducts(products) {
    document.querySelector("#products").innerHTML = ""; 
    products.forEach((stuff, i) => {
         document.querySelector("#products").innerHTML += `
        
    <div class="card">
            <img src="${products[i].img}"  class="img">
        <div class="card-body">
            <h5 class="card-title">${products[i].title}</h5>
            <p class="card-text">${products[i].category}</p>
            <p>${products[i].price}</p>
            <button onclick="deleteProduct(${i})" ${stuff} class="btn btn-danger">Delete</button>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update-modal-${i}">Edit</button>
            
            <button onclick="updateProduct(i)" class="btn btn-success">Add to Cart</button>
        </div>
            <!--modal beginning-->
            <div class="modal fade" id="update-modal-${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <!--<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>-->
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" id="update-title${i}" value="${products[i].title}" placeholder="Enter title">
                            <input type="text" id="update-category${i}" value="${products[i].category}" placeholder="Enter category">
                            <input type="text" id="update-price${i}" value="${products[i].price}" placeholder="Enter price">
                            <input type="text" id="update-image${i}" value="${products[i].img}" placeholder="Enter image">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="updateProduct(${i}) " >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
    `;
  });
};
readProducts(products);

//creating the products
function createProducts() 
{
    let productTitle = document.querySelector("#update-title").value;
    let productCategory = document.querySelector("#update-category").value;
    let productPrice = document.querySelector("#update-price").value;
    let productImage = document.querySelector("#update-image").value;
    
        
            products.push({
            title:productTitle,
            category:productCategory,
            price:productPrice,
            img:productImage,
            });
localStorage.setItem("products", JSON.stringify(products));
readProducts(products);
    


 
    readProducts(products);
}
//deleting the products
function deleteProduct() 
{
    products.splice(i,1);
    readProducts(products);
}
//update
function updateProduct(i) 
{
    let updateTitle  = document.querySelector(`#update-title${i}`).value;
    let updateCategory = document.querySelector(`#update-category${i}`).value;
    let updatePrice = document.querySelector(`#update-price${i}`).value;
    let updateImage = document.querySelector(`#update-image${i}`).value;    
            products[i] = {
            title:updateTitle ,
            category:updateCategory,
            price:updatePrice,
            img:updateImage,
            }
        readProducts(products);
    
}
