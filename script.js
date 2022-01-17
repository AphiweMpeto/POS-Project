let products = JSON.parse(localStorage.getItem("products"))
    ?JSON.parse(localStorage.getItem("products"))
    :[
    {
        title: "sun glasses",
        category: "accessories" ,
        price: 20.00,
        img: "https://postimg.cc/HjhZtV1K"
    },
    {
        title: "watch",
        category: "accessories" ,
        price: 39.99,
        img: "https://postimg.cc/NK3L88dM"
    },
        
    {
        title: "sweatpants",
        category: "bottoms", 
        price: 13.99,
        img: "https://postimg.cc/YvksvTHq"
    },
     
    {
        title: "shirt",
        category: "tops" ,
        price: 9.99,
        img: "https://postimg.cc/14bt1rZK"
    },
    {
        title: "sneakers",
        category: "shoes",
        price: 129.99,
        img: "https://postimg.cc/9zBhJPQM"
    },
];

// READ 

function readProducts(prod) {
    document.querySelector("#products").innerHTML = "";
    prod.forEach((product, position) => {
        document.querySelector("#products").innerHTML += `
        <div class="card mb-3 g-4">
    <img src="${product.img}" class="card-img-top" alt="${product.title}">
    <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">R${product.price}</p>
        <div class="d-flex mb-3">
        <input type="number" class="form-control value=1 min=1 id=addToCart">
        <button type="button" class="btn btn-primary ms-3" onclick="addToCart(${position})"><i class="fas fa-cart-plus"></i></button>
        </div>
    </div>
    <div class="d-flex justify-content-end card-footer">
        <button type="button" class="btn btn-primary w-50" data-bs-toggle="modal" data-bs-target="#editProduct${position}">Edit</button>
        <button type="button" class="btn btn-info w-50 ms-3" onclick="deleteProduct${position}">Delete</button>
    </div>
    </div>
    <div class="modal fade" id="editProduct${position}" tabindex="-1"aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                    <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> Edit ${product.title}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <div class="mb-3"><label for="editTitle${position}" class="form-label">Title</label><input class="form-control" 
                    type="text" name="editTitle${position}" id="editTitle${position}" value="${product.title}"/>
            </div>
            <div class="mb-3"><label for="editCategory${position}" class="form-label">Category</label>
                <select class="form-select" name="editCategory${position}" id="editCategory${position}">
                    <option value="Fruit">Fruit</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Meat">Meat</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="editPrice${position}" class="form-label">Price</label>
                <input class="form-control" type="text" name="editPrice${position}" id="editPrice${position}" value="${product.price}"/>
            </div>
            <div class="mb-3"><label for="editImg${position}" class="form-label">Image URL</label>
                <input class="form-control" type="text" name="editImg${position}" id="editImg${position}"value="${product.img}"/>
            </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onclick="updateProduct(${position})">Save changes</button></div>
            </div>
        </div>
    </div>
    `;
    });

};

readProducts(products);

// CREATE

function addProduct() {
    let product = document.querySelector("#input").value;
    let prod = document.querySelector("#addCategory").value;
    try {
        
    
        readProducts(products);
    }
    catch (err) {
    
        alert(err); {
    
        }
    }
}


//DELETE

function deleteProduct(i) {
    let confirmation = confirm("Are you sure you want to delete this product?");
    if (confirmation) {
        products.splice(i, 1);
    }
    readProducts(products);
}


//UPDATE

function updateProduct(i) {
    let product = document.querySelector(`#update-input-${i}`).value;
    try {
        if (!product) throw new Error("");
        products[i] = {
            
        }
        readProducts(products);
    }
    catch (err) {
        alert(err);
    }
}

