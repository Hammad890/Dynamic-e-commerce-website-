// for (let i=1; i < 200; i= i+1){
//     if (i % 2 === 1){
//         console.log(i,"odd");
//         break;
//     } else{
//         console.log(i,"even")
//     }
// }
// let tablevalue = 2
// let i = 1
// while (i<=10){
//     console.log(tablevalue,"x",i,"=", i*tablevalue);i=i+i
// }
let cart = [];
let isLoggedIn = false;
function addToCart (name,price){
    let item = {
        name : name,
        price : price
    };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
console.log(`${name}-$${price}`);
alert("This article added to your cart");
const cartitems = document.getElementsByClassName("cart")[0].innerText
const updatedCart = Number(cartitems) + 1
document.getElementsByClassName("cart")[0].innerText = updatedCart
};
function checkInput(){
        window.location.href= "cart.html";
}
function checkOut() {
    if(isLoggedIn){
        window.location.href= "cart.html"
    }
    else{
        window.location.href= "signup.html"
    }
}
function showOrder(){
    let total = 0;
    let orderText = "<h2>Order</h2>";
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    for(let i=0; i < cart.length; i++){
        orderText += "<p>"+ cart[i].name + ":$"+ cart[i].price + "</p>";
        total += cart[i].price;
    }
    orderText += "<p> Total:$"+ total +"</p>";
    document.getElementById("order").innerHTML = orderText;
    console.log(cart);
    console.log("Total price :$"+ total);
}
const fProducts = [{productId:1, title: "JANAN", Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat alias officiis distinctio quo dolor quae possimus. Et, ab sapiente. Quibusdam quas quia aspernatur! Dolorum voluptatibus possimus natus autem consequuntur necessitatibus.",Image: "https://www.junaidjamshed.com/media/catalog/product/j/a/janan_sport_1__1.jpg",isFeatured: true},
{productId:2, title: "JANAN", Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat alias officiis distinctio quo dolor quae possimus. Et, ab sapiente. Quibusdam quas quia aspernatur! Dolorum voluptatibus possimus natus autem consequuntur necessitatibus.",Image: "https://www.junaidjamshed.com/media/catalog/product/j/a/janan_sport_1__1.jpg",isFeatured: true}]
for(let product of fProducts){
    let mainDiv= document.createElement('div')
    mainDiv.style.width= '40%'
    mainDiv.style.backgroundColor= 'antiquewhite'
    mainDiv.style.border='4px solid darkcyan'
    mainDiv.style.display= 'inline-block'
    let headingText= document.createTextNode(product.title)
    let heading= document.createElement('h2')
    heading.appendChild(headingText) 
    mainDiv.appendChild(heading);
    if(product.isFeatured){
        let image= document.createElement('img')
        image.setAttribute('src',product.Image)
        image.style.width= '200px'
        image.style.height= '200px'
        image.style.alignItems= 'centre'
        mainDiv.appendChild(image);
    }
    let DescriptionText= document.createTextNode(product.Description)
    let description= document.createElement('p')
    description.appendChild(DescriptionText)
    mainDiv.appendChild(description);
    let button= document.createElement('button')
    let buttonText= document.createTextNode("See More")
    button.appendChild(buttonText)
    button.addEventListener("click",button);
    mainDiv.appendChild(button);
    let productDiv = document.createElement('div')
    productDiv.style.width= '100%'
    productDiv.appendChild(mainDiv)
    feature.appendChild(productDiv)
}
