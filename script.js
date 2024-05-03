let product = [
    {
        id: 1,
        title: "Mast & Harbour",
        price: 699,
        description: "Regular Fit Formal Shirt",
        category: "men's clothing",
        image: "https://www.soratia.com/cdn/shop/files/4H9A1518.jpg?v=1712140141&width=246",
        rating: {
            rate: 3.9,
            count: 120
        }
    },
    {
        id: 2,
        title: " QOMN",
        price: 899,
        description: "Pure Cotton Longline Top",
        category: "women clothing",
        image: "https://uptownie.com/cdn/shop/files/13_ebf5fb61-12ff-46e7-ad00-e17608a8983c_540x.png?v=1696833122",
        rating: {
            rate: 4.1,
            count: 259
        }
    },
    {
        id: 3,
        title: "Raymond",
        price: 1599,
        description: "Regular Fit Casual Shirt",
        category: "men's clothing",
        image: "https://www.soratia.com/cdn/shop/files/0A0A7613.jpg?v=1707379579&width=246",
        rating: {
            rate: 4.7,
            count: 500
        }
    },
    {
        id: 4,
        title: "Roadster",
        price: 599,
        description: "Mens Casual Slim Fit",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        rating: {
            rate: 2.1,
            count: 430
        }
    },
    {
        id: 5,
        title: "Chain Bracelet",
        price: 1999,
        description: "Gold & Silver Dragon Station",
        category: "jewelery",
        image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        rating: {
            rate: 4.6,
            count: 400
        }
    },
    {
        id: 6,
        title: "Levi's ",
        price: 1899,
        description: "Men Tapered Fit Jeans",
        category: "Jeans",
        image: "https://levi.in/cdn/shop/files/360870717_01_Front_6ac10e6f-933f-4eb4-89b3-1a1b8590a1d6.jpg?v=1712742764",
        rating: {
            rate: 3.9,
            count: 70
        }
    },
    {
        id: 7,
        title: "Black Berry's",
        price: 999,
        description: "Men Straight Fit Cotton Jeans",
        category: "Jeans",
        image: "https://blackberrys.com/cdn/shop/files/ultrasoft-jeans-in-black-duke-fit-nash-blackberrys-clothing-1.jpg?v=1685957330&width=2000",
        rating: {
            rate: 3,
            count: 400
        }
    },
    {
        id: 8,
        title: "Boot Cut",
        price: 1499,
        description: "Bell Bottom Jeans For Women",
        category: "Jeans",
        image: "https://wearyourwords.in/cdn/shop/files/MV4jIo7YT-_OnCrJ6I8Okg.png?v=1714537879&width=720",
        rating: {
            rate: 1.9,
            count: 100
        }
    },
    {
        id: 9,
        title: "Nike ",
        price: 1069,
        description: "Women Straight Fit cotton Jeans",
        category: "Jeans",
        image: "https://lovegen.com/cdn/shop/files/S23SOFLTBLU_1-crop-c0-5__0-5-610x850-90.jpg?v=1701413969&width=600",
        rating: {
            rate: 3.3,
            count: 203
        }
    },
    {
        id: 10,
        title: "Zest Mélange",
        price: 2599,
        description: "Cropped Cotton Shirt",
        category: "Women's Clothing",
        image: "https://www.pinklay.com/cdn/shop/files/BethanySolidGreenAsymmetricalTop_800x.jpg?v=1710319842",
        rating: {
            rate: 2.9,
            count: 470
        }
    }
]
let cont = document.getElementById("container");

function filterfn() {
    let fil = document.getElementById("selec").value;
    if (fil == "one") {
        let filterdata = product.filter((el, i) => {
            if (el.price <= 1000) {
                return el;
            }
        })
        displaydata(filterdata);
    }
    else if (fil == "two") {
        let filterData = product.filter((el, i) => {
            if (el.price > 1000 && el.price <= 2000) {
                return el;
            }
        })
        displaydata(filterdata);

    }
    else if (fil == "three") {
        let filterData = product.filter((el, i) => {
            if (el.price > 2000) {
                return el;
            }
        })
        displaydata(filterData);
    }
}

function displaydata(product) {
    cont.innerHTML = ""
    product.map((el, i) => {

        let card = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.image
        let p = document.createElement("p")
        p.textContent = ` ${el.title}`;
        p.setAttribute("id", "name")
        let p1 = document.createElement("p")
        p1.textContent = `${el.description}`;
        p1.setAttribute("class", "desc")
        let p2 = document.createElement("p")
        p2.textContent = `Rs. ${el.price}`;
        p2.setAttribute("class", "price")

        card.append(img, p, p1, p2)
        cont.append(card)
    })

}


displaydata(product);