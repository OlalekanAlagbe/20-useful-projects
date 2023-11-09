const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "steak dinner",
      category: "dinner",
      price: 29.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];

  const sectionCenter = document.querySelector(".section-center");
  
  const filterBtnsContainer = document.querySelector(".btn-container");

console.log(1)
  //load items
  window.addEventListener("DOMContentLoaded", ()=>{
      console.log("firstA")
        displayMenuItems(menu);
        displayMenuBtns()
       
  })

  let displayMenuItems = (menuItems) => {
            let displayMenu = menuItems.map((item)=>{
                let {id, title, category, price, img, desc} = item;

                return `  
                        <article class="menu-item">
                            <img src=${img} class="photo" alt="Image">
                            <div class="item-info">
                                <header>            
                                    <h4>${title}</h4>
                                    <h4 class="price">$${price}</h4>
                                </header>  
                                <p>${desc}</p>
                                
                            </div>
                        </article>
                        `
            })
            displayMenu = displayMenu.join("");
            sectionCenter.innerHTML = displayMenu
  }

  let displayMenuBtns = ()=>{
            const categories = menu.reduce((values,item)=>{
                    if(!values.includes(item.category)){
                        values.push(item.category)
                    }
                    return values
                       },["all"]) 
                  let categoryBtn = categories.map((item)=>{
                    return `
                            <button class="filter-btn" data-id= ${item}  type="button">${item}</button>
                            `
                })
                categoryBtn = categoryBtn .join("");
                filterBtnsContainer.innerHTML = categoryBtn;
                
                filterBtns = document.querySelectorAll(".filter-btn");

            filterBtns.forEach((btn)=>{
                btn.addEventListener("click",(e)=>{
                    let filterOption = e.currentTarget.dataset.id;

                    let filterArray = menu.filter((menuItem)=>{
                    if(menuItem.category === filterOption){
                        return menuItem
                    }

                    if(filterOption==="all"){
                        return menuItem;
                    }
                    });
                    displayMenuItems(filterArray); 
                    
                })
            })
            console.log("First")
  }

  console.log("second")