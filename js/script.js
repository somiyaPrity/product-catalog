const filterInput = document.querySelector('#filter');
const nameInput = document.querySelector('.product-name');
const priceInput = document.querySelector('.product-price');
const addBtn = document.querySelector('.add-product');
const deleteProduct = document.querySelector('.delete-product');
const productListUl = document.querySelector('.collection');
const msg = document.querySelector('.msg');

//data / state

let productData =[]


function getData(productList){
    if(productData.length >0){
        msg.innerHTML = '';
        productList.forEach(product => {
            let li = document.createElement('li');
            li.className = 'list-group-item collection item';
            li.id = `product-${product.id}`;
            li.innerHTML = ` <strong>${product.name}</strong>- <span class="price">${product.price}</span>
            <i class="fa fa-trash float-right delete-product"></i>`
            productListUl.appendChild(li);
            
        });
        
    }
    else{
     showMsg(true, null);
    }
    
}

getData(productData);

addBtn.addEventListener('click', e => {
    e.preventDefault();
    const name = nameInput.value;
    const price = priceInput.value;
    let id;
    if(productData.length === 0){
        id = 0;
    }
    else{
        id = productData[productData.length -1].id + 1;
    }
    if(
        name === '' || 
        price === '' ||
        !(!isNaN(parseFloat(price)) &&
        isFinite(price))
        ){
        alert("Please fill up necessary and valid information ");
    }
    else{
        productData.push({
            id ,
            name,
            price
        }) 
        productListUl.innerHTML = '';
        getData(productData);
        nameInput.value = '';
        priceInput.value = ''; 
    }
   
} )

// delete item
productListUl.addEventListener('click', e => {
    if(e.target.classList.contains('delete-product')){
        const target = e.target.parentElement;
        e.target.parentElement.parentElement.removeChild(target);
        

        const id = +(target.id.split('-')[1]);
        let result = productData.filter((product) => {
           return product.id !== id;
        });
        productData = result;
    }
});


filterInput.addEventListener('keyup', e => {
   const text = e.target.value.toLowerCase();
   document.querySelectorAll('.collection .item').forEach(item => {
       const productName = item.firstElementChild.textContent.toLowerCase();
       if(productName.indexOf(text) === -1){
          showMsg(null, true);
          item.style.display = 'none'; 
       }
       else{
           msg.innerHTML = '';
           item.style.display = 'block';
       }
   });
});

function showMsg(fetchMsg, searchMsg){
   if(fetchMsg){
    msg.innerHTML = 'please add item to your catalog';
   }
   else if(searchMsg){
    msg.innerHTML = 'no item meet your criteria';
   }
}