var products = [
    {
        id: 101,
        title: "Earphones",
        variations: [
            { id: 1, color: "black", quantity: 4 },
            { id: 2, color: "white", quantity: 2 },
            { id: 3, color: "blue", quantity: 3 },
        ],
        price: 400
    },
    {
        id: 102,
        title: "Mobile",
        variations: [
            { id: 1, color: "gold", quantity: 4 },
            { id: 2, color: "pink", quantity: 7 },
            { id: 3, color: "red", quantity: 5 },
        ],
        price: 400
    },
     {
        id: 102,
        title: "Mobile",
        variations: [
            { id: 1, color: "gold", quantity: 4 },
            { id: 2, color: "pink", quantity: 7 },
            { id: 3, color: "red", quantity: 5 },
        ],
        price: 400
    },
     {
        id: 102,
        title: "graphic",
        variations: [
            { id: 1, color: "gold", quantity: 19 },
            { id: 2, color: "pink", quantity: 7 },
            { id: 3, color: "red", quantity: 9 },
        ],
        price: 400
    },
     {
        id: 102,
        title: "Airpods",
        variations: [
            { id: 1, color: "gold", quantity: 11},
            { id: 2, color: "pink", quantity: 21},
            { id: 3, color: "red", quantity: 9 },
        ],
        price: 400
    },
]


var search = prompt("Enter the product name: ")
var totalQ = 0;

for(var i = 0; i < products.length ; i++){
if(products[i].title.toLowerCase() === search.toLowerCase() ){
    // console.log(products[i].variations[1].quantity)
    for(var j =0; j < products[i].variations.length; j++){
        totalQ = totalQ + products[i].variations[j].quantity;
    }
} 
}


console.log(totalQ);
