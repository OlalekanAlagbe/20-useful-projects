//   SELECT ITEMS

const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submtBtn = document.querySelector(".submit-btn")
const container = document.querySelector(".grocery-container");
const list  = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");


// let editElement; Declaration without a let, const or var keyword
// makes a global variable.
let editFlag = false;
let editID = "";



// EVENT LISTENERS


//load items

window.addEventListener("DOMContentLoaded", ()=>{
    setupItems();
})

// submit form

form.addEventListener("submit", addItem);

// clear items

clearBtn.addEventListener("click", ()=>{
    clearItems()
})

function addItem(e){
    e.preventDefault()
    const value = grocery.value;
    const id = new Date().getTime().toString();
    if(value && !editFlag){
        const element = document.createElement("article");

        // add class

        element.classList.add("grocery-item");

        // add id

        const attr = document.createAttribute("data-id");
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
            <p class="title">${value}</p>
            <div class="btn-container">
                <button type="button"  class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button type="button"  class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>`

            const deleteBtn = element.querySelector(".delete-btn");
            const editBtn = element.querySelector(".edit-btn");

            deleteBtn.addEventListener("click",(e)=>{
                deleteFunc(e)
            })


            editBtn.addEventListener("click",(e)=>{
                editFunc(e)
            })

            
            
            list.appendChild(element)
        // display alert
        alert.textContent = "Item added successfully";
        alert.classList.add("alert-success"); 
        setTimeout(()=>{
            alert.textContent = "";
            alert.classList.remove("alert-success");
        },2000)

        container.classList.add("show-container");

        // add to local storage

        addToLocalStorage(id, value);

        //set back to default

        setBackToDefault()

    }else if(value && editFlag){
         editElement.innerHTML = value;
         alert.textContent = "Item changed successfully";
         alert.classList.add("alert-success"); 
         setTimeout(()=>{
            alert.textContent = "";
            alert.classList.remove("alert-success");
         },2000)

         //edit local storage 
         editLocalStorage(editID,value)

         setBackToDefault() 
    }
    else{
        
        alert.textContent = "empty value";
        alert.classList.add("alert-danger"); 
        setTimeout(()=>{
            alert.textContent = "";
            alert.classList.remove("alert-danger");
        },2000)
    }
    
}


//clear items

let clearItems = ()=>{
    const items =document.querySelectorAll(".grocery-item");
    if(items.length > 0){
        items.forEach((item)=>{
            list.removeChild(item); 
        })
    }
    container.classList.remove("show-container");
    alert.textContent = "All Items cleared successfully";
    alert.classList.add("alert-success"); 
    setTimeout(()=>{
        alert.textContent = "";
        alert.classList.remove("alert-success");
    },2000)
    setBackToDefault();

    localStorage.removeItem("list");

}

//detele function

let deleteFunc = (e)=>{
    const element = e.currentTarget.parentElement.parentElement;   
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0){
        container.classList.remove("show-container");
    }
    alert.textContent = "Item deleted";
    alert.classList.add("alert-danger"); 
    setTimeout(()=>{
        alert.textContent = "";
        alert.classList.remove("alert-danger");
    },2000)

    setBackToDefault();

    //remove from local storage

    removeFromLocalStorage(id);

}


//edit function

let editFunc = (e)=>{
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    //set form value
    grocery.value = editElement.innerHTML;  
    editFlag = true;
    editID = element.dataset.id;
    submtBtn.textContent = "edit"

}


//set back to default
 
let setBackToDefault = ()=>{
    grocery.value = "";
    editFlag = false;
    editID = "";
    submtBtn.textContent = "submit"; 

}

// LOCAL STORAGE


function addToLocalStorage(id, value){
    const grocery = {id,value }
    let items = getLocalStorage()
    items.push(grocery);
    localStorage.setItem("list",JSON.stringify(items))
    console.log(items)

}
let getLocalStorage = ()=>{

    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem("list")) : [];

}

let removeFromLocalStorage = (id)=>{
     let items = getLocalStorage();
     items = items.filter((item)=>{
        if(item.id !== id){
            return item
        }
     });
     localStorage.setItem("list",JSON.stringify(items))
}
let editLocalStorage = (id,value)=>{
    let items = getLocalStorage();
    items = items.map((item)=>{
        if(item.id === id){
            item.value = value;
        }
        return item;
    });
    localStorage.setItem("list",JSON.stringify(items));
}

//SETUP ITEMS

let setupItems = ()=>{
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach((item)=>{

        const element = document.createElement("article");

        // add class

        element.classList.add("grocery-item");

        // add id

        const attr = document.createAttribute("data-id");
        attr.value = item.id;
        element.setAttributeNode(attr);
        element.innerHTML = `
            <p class="title">${item.value}</p>
            <div class="btn-container">
                <button type="button"  class="edit-btn">
                    <i class="fas fa-edit"></i>
                </button>
                <button type="button"  class="delete-btn">
                    <i class="fas fa-trash"></i>
                </button>
            </div>`

            const deleteBtn = element.querySelector(".delete-btn");
            const editBtn = element.querySelector(".edit-btn");

            deleteBtn.addEventListener("click",(e)=>{
                deleteFunc(e)
            })


            editBtn.addEventListener("click",(e)=>{
                editFunc(e)
            })

            
            
            list.appendChild(element)

            container.classList.add("show-container");
            
        })
    }
}

