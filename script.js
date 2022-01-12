let products = [
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
        title: "kicks",
        category: "shoes",
        price: 129.99,
        img: "https://postimg.cc/9zBhJPQM"
    },
];

// READ 

function readProducts(prod) {
    document.querySelector("#products").innerHTML = "";
    prod.forEach((product, i) => {
        document.querySelector("#product").innerHTML += `
    
        `;
    });

};

readProducts(products);

// CREATE

function addProduct() {
    let prod = document.querySelector("#input").value;
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
    let confirmation = confrm("Are you sure you want to delete this product?");
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

