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
    alert(`${name} has been added to your cart.`);
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
    mainDiv.classList.add('col-md-6', 'col-lg-4', 'mb-4');
    let card = document.createElement('div');
    card.classList.add('card', 'h-100', 'text-center', 'shadow-sm'); 
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