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

