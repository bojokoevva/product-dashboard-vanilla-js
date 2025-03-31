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