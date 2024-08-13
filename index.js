let cart = [];
let isLoggedIn = false;
function addToCart (name,price,image){
    let item = {
        name : name,
        price : price,
        image: image,
        quantity: 1
    };
    let cart = localStorage.getItem('cart');
    cart = cart ? JSON.parse(cart) : [];

    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(item);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const cart = localStorage.getItem('cart');
    const cartItems = cart ? JSON.parse(cart) : [];
    document.querySelector('.cart-count').innerText = cartItems.length;
}

document.addEventListener('DOMContentLoaded', updateCartCount);
function cartedItem() {
    if(isLoggedIn){
        window.location.href= "cart.html"
    }
    else{
        window.location.href= "signup.html"
    }
}

function signUp(){
    if(isLoggedIn){
        alert("You already Signup")
}else{
    window.location.href="signup.html"
}
}

document.addEventListener('DOMContentLoaded', function() {
const feature = document.getElementById('feature');
const fProducts = [{productId:1, title: "JANAN", Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat alias officiis distinctio quo dolor quae possimus. Et, ab sapiente. Quibusdam quas quia aspernatur! Dolorum voluptatibus possimus natus autem consequuntur necessitatibus.",Image: "https://www.junaidjamshed.com/media/catalog/product/j/a/janan_sport_1__1.jpg",isFeatured: true},
{productId:2, title: "JANAN", Description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat alias officiis distinctio quo dolor quae possimus. Et, ab sapiente. Quibusdam quas quia aspernatur! Dolorum voluptatibus possimus natus autem consequuntur necessitatibus.",Image: "https://www.junaidjamshed.com/media/catalog/product/j/a/janan_sport_1__1.jpg",isFeatured: true}]
for(let product of fProducts){
    let mainDiv= document.createElement('div')
<<<<<<< HEAD
    mainDiv.classList.add('col-md-6', 'col-lg-4', 'mb-4');
    let card = document.createElement('div');
    card.classList.add('card', 'h-100', 'text-center', 'shadow-sm'); 
=======
    
    mainDiv.style.backgroundColor= 'antiquewhite'
    mainDiv.style.border='4px solid darkcyan'
    mainDiv.style.margin='0 10px';
    mainDiv.style.textAlign = 'center';
    let headingText= document.createTextNode(product.title)
    let heading= document.createElement('h2')
    heading.appendChild(headingText) 
    heading.style.color= 'darkcyan'
    heading.style.textAlign=''
    mainDiv.appendChild(heading);
    if(product.isFeatured){
        let image= document.createElement('img')
        image.setAttribute('src',product.Image)
        let imageDiv= document.createElement('div')
        imageDiv.appendChild(image)
        image.style.width= '200px'
        image.style.height= '200px'
        mainDiv.appendChild(imageDiv);
    }
    let DescriptionText= document.createTextNode(product.Description)
    let description= document.createElement('p')
    description.appendChild(DescriptionText)
    mainDiv.appendChild(description);
    let button= document.createElement('button')
    button.style.color= 'rgb(184, 245, 245)'
    let buttonText= document.createTextNode("See More")
    button.appendChild(buttonText)
    button.addEventListener("click",button);
    mainDiv.appendChild(button);
    let productDiv = document.createElement('div')
    productDiv.appendChild(mainDiv)
    feature.appendChild(productDiv);
   
}
});
>>>>>>> f50dfba11b0e445908618f38e4a636b6b033ddb1

    let heading = document.createElement('h2');
    heading.classList.add('card-title-1', 'text-darkcyan');
    heading.textContent = product.title;
    card.appendChild(heading);

    if (product.isFeatured) {
        let image = document.createElement('img');
        image.setAttribute('src', product.Image);
        image.classList.add('card-img-top'); 
        image.style.width = '100%';
        image.style.height = 'auto';
        card.appendChild(image);
    }

    let description = document.createElement('p');
    description.classList.add('card-text-1');
    description.textContent = product.Description;
    card.appendChild(description);

    let button = document.createElement('button');
    button.classList.add('btn', 'btn-primary'); 
    button.textContent = "See More";
    card.appendChild(button);
    mainDiv.appendChild(card);
    feature.appendChild(mainDiv);
}
});