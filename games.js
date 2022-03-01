var products = [
    {
        image:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"Playstation",
        color:"blue"
    },
    {
        image:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"Xbox",
        color:"green"
    },
    {
        image:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfreeze their island form a bunch of icy animals and collect lots of bananas.",
        platform:"Switch",
        color:"red"
    }
];

function game() {
    let that = this;
    this.productArray = [];
    this.console = document.createElement("div");
    this.console.classList.add("products");

    for (let i = 0; i < products.length; i++) {
        this.productArray.push(new Product(i));
        this.productArray[i].console.addEventListener("click", function() {
            var pop = new popup(i);
        });

        this.console.appendChild(this.productArray[i].console);
    }

    document.body.appendChild(this.console);
}

function Product(idx) {
    let that = this;
    this.console = document.createElement("div");
    this.prodImg = document.createElement("img");
    this.nameEle = document.createElement("p");
    this.priceEle = document.createElement("p");
    this.prodImg.setAttribute("src", products[idx].image);
    this.console.classList.add("product");
    this.console.append(this.prodImg);
    this.nameEle.innerHTML = "Name: " + products[idx].name;
    this.priceEle.innerHTML = "Price: " + products[idx].price;
    this.console.append(this.nameEle);
    this.console.append(this.priceEle);

    this.console.addEventListener("mouseover", function() {
        that.console.style.borderColor = products[idx].color;
    });
    this.console.addEventListener("mouseout", function() {
        that.console.style.borderColor = "black";
    });

}



function popup(idx) {
    let that = this;
    this.console = document.createElement("div");
    this.console.classList.add("popUp");
    this.img = document.createElement("img");
    this.nameEle = document.createElement("p");
    this.priceEle = document.createElement("p");
    this.descriptionEle = document.createElement("p");
    this.platformEle = document.createElement("p");
    this.img.setAttribute("src", products[idx].image);
    this.nameEle.innerHTML = "Name: " + products[idx].name;
    this.descriptionEle.innerHTML = "Description: " + products[idx].description;
    this.priceEle.innerHTML = "Price: " + products[idx].price;
    this.platformEle.innerHTML = "Platform: " + products[idx].platform;
    this.console.append(this.img);
    this.console.append(this.nameEle);
    this.console.append(this.priceEle);
    this.console.append(this.descriptionEle);
    this.console.append(this.platformEle);




    this.console.addEventListener("click", function() {
        that.console.style.display = "none";
    });

    document.body.appendChild(this.console);
}

var video = new game;