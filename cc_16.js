// Task 2: Fetch Products with .then()

function fetchProductsThen() {  
    fetch("https://www.course-api.com/javascript-store-products") //Use fetch() to retrieve data from the given API.
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();  //Handle the response by converting it to JSON.
        })
        .then(products => {
            console.log("Products fetched using .then():");  //Log each product’s name to the console.
            products.forEach(product => console.log(product.fields.name));
        })
        .catch(handleError);  //Use .catch() to log any errors.
}

// Task 3: Fetch Products with async/await

async function fetchProductsAsync() {  //Use async/await to fetch data from the API.
    try {
        const response = await fetch("https://www.course-api.com/javascript-store-products");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const products = await response.json();  //Convert the response to JSON.
        displayProducts(products);  //Call a helper function to display products.
    } catch (error) {
        handleError(error);  // Handle errors with the reusable function
    }
}

// Task 5 - Reusable handleError function

function handleError(error) {
    // Log the error message to the console
    console.log("An error occurred", error);
}

// Task 4 - Display products in the DOM with name, price, and image

function displayProducts(products) {
    const container = document.getElementById("product-container");  // Select the container where the products will be displayed

    products.slice(0, 5).forEach(product => {  // Loop through the first 5 products in the array
        const productCard = document.createElement("div");   // Create a new div element to hold each product's information

        // Set the inner HTML of the product card with product details: name, price, and image
        productCard.innerHTML = `
            <h3>${product.fields.name}</h3><p>Price: $${product.fields.price}</p><img src="${product.fields.image[0].url}">`;

        productCard.setAttribute("class", "productCard");   // Assign a class to the product card for styling
        container.appendChild(productCard);   // Append the product card to the product container
    });
}

// Task 6 - Trigger both fetch methods when the script loads

fetchProductsAsync();  // Calls the asynchronous fetch function
fetchProductsThen();   // Calls the fetch function using .then() and .catch()
