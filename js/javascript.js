//code voor de shop
const products = document.querySelectorAll('.shop-artikel')
const counter = document.querySelector('.counter');
const checkout = document.querySelector('.checkout');
const buttons = document.querySelectorAll('.buy-knop');
const shopCart = document.querySelector('.shopcart-container');
let totalPriceElement = document.getElementById('total-price');
let totalPrice = 0;
let count = 0;

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', function() {
        const cartItem = document.createElement('article');
        const price = document.createElement('p');
        const productName = document.createElement('p');
        const line = document.createElement('div');
        line.className = "shopcart-line";

        price.textContent = products[i].children[2].textContent.replace('€','');
        totalPrice += parseInt(price.textContent);

        productName.textContent = products[i].children[1].textContent;
        
        cartItem.appendChild(productName);
        cartItem.appendChild(price);
        if (count > 0) {
            counter.appendChild(line);
        }
        counter.appendChild(cartItem);
        count++;
        totalPriceElement.textContent = totalPrice;
	});
}

shopCart.addEventListener("click", function() {
    if (counter.style.display == "none"){
        counter.style.display = "block";
    } else {
        counter.style.display = "none";
    }
  });

shopCart.addEventListener("click", function() {
    if (checkout.style.display == "none"){
        checkout.style.display = "flex";
    } else {
        checkout.style.display = "none";
    }
  });

//code voor de comment section
const form = document.getElementsByClassName('comment-input')[0];
form.addEventListener('submit', function(event){
    event.preventDefault();
    const input = document.getElementsByClassName('comment')[0];

    const commentSection = document.getElementsByClassName('comments')[0];

    const commentContainer = document.createElement('article');
    commentContainer.className = 'commentcontainer';
    const avatar = document.createElement('img');
    avatar.className = "avatar";
    avatar.src = "assets/avatar.png";
    const comment = document.createElement('p');
    comment.textContent = input.value;
    const likeButton = document.createElement('img');
    likeButton.className = "like";
    likeButton.src = "assets/like.webp";

    commentContainer.appendChild(avatar);
    commentContainer.appendChild(comment);
    commentContainer.appendChild(likeButton);
    commentSection.appendChild(commentContainer);
});

