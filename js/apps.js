

const selectInput = (inputID) => {
    const selectElement = document.getElementById(inputID)
    const selectValue = selectElement.value
    selectValue.value = ''
    return selectValue
}

const selectId = (elementID) =>{
    const selectElement = document.getElementById(elementID)
    return selectElement
}

const getLocalStore = () =>{
    const getProducts = localStorage.getItem('product')
    return JSON.parse(getProducts);
}

// const validation = () =>{
//     const productName = selectInput('name-flied')
//     const price = parseFloat(selectInput('price-flied'))
//     if(!typeof(productName === String)){
//         alert("Product's name always String, Enter only string")
//     }
//     else if(productName === ''  || price === '') {
//         alert('Please Enter a product name')
//     }
// } 
const randomId = () => { 
    const rand =  parseInt(Math.random()*30);
    if(rand == rand){
        return rand 
        }else {
            randomId() 
        }
        return rand 
}
console.log(randomId());


const setLocalStore = () => {
    const productName = selectInput('todo-flied')
    const getItem = getLocalStore()
    if (getItem) {
        const productList = JSON.stringify([
            
            {id : 2343222434543, name : productName,completed:false},
            ...getItem,
        ])
        localStorage.setItem('product', productList)   
    } else {
        const productList = JSON.stringify([
            {id : 2343222434543, name : productName,completed:false}
        ])
        localStorage.setItem('product', productList)   
    }
}

const showDisplay = () =>{
    const select = selectId('todo-list')
    const getProductString = localStorage.getItem('product')
    const getProducts = JSON.parse(getProductString)
    const createDiv = document.createElement('div')
    select.innerHTML = ''
    getProducts.forEach(product => {
    const productName = product.name; 
        createDiv.innerHTML += 
        `<li class="flex justify-between align-middle p-1 px-5 rounded-md mt-3 bg-gray-100"><a href="#">${productName}<a>
        <button onclick="deleteItem()" class="circle w-auto"><i class="fa-regular  hover:text-red-500 text-right fa-circle-xmark text-lg"></i></button>
        </li>`
    });
    select.appendChild(createDiv)
}

document.getElementById('todo-set').addEventListener('click',function(){
    setLocalStore()
    getLocalStore()
    showDisplay()
})

const deleteItem = () =>{
    localStorage.removeItem('product')
}

showDisplay()