

/// Select Elements
let goodscont = document.querySelector(".container");

///header Function
///  toggle in header
let toggle = document.querySelector(".toggle-menu");
let sideMenu = document.querySelector(".side-menu");
sideMenu.setAttribute("dis", "none")
toggle.onclick = function () {
    showsideMenu();
}

function showsideMenu() {
    if (sideMenu.getAttribute("dis") === 'none') {
        sideMenu.setAttribute("dis", "flex");
        sideMenu.style.transform = "translatey(43px)";
        goodscont.style.cssText = `padding : 100px auto`;
        toggle.style.transform = "rotate(-45deg)";
    } else if (sideMenu.getAttribute("dis") === 'flex') {
        sideMenu.setAttribute("dis", "none");
        sideMenu.style.transform = "translatey(-43px)";
        goodscont.style.cssText = `padding : 50px auto`;
        toggle.style.transform = "rotate(0)";
    }
}




function getGoods() {

    ///Request json
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            ///change from jsonObject To Js objects
            let goodsJS = JSON.parse(this.responseText);
            console.log(goodsJS);
            ///Loop
            for (let i = 0; i < goodsJS.length; i++) {

                let card = document.createElement("div");
                card.className = 'card';


                let image = document.createElement("div");
                image.className = "image";

                let imgEle = document.createElement("img");
                imgEle.src = goodsJS[i].image;

                let info = document.createElement("div");
                info.className = 'info';

                let hTow = document.createElement("h4");
                let hTowTxt = document.createTextNode(goodsJS[i].descriotion);
                let p = document.createElement("p");
                let spanPrice = document.createElement("span");
                spanPrice.innerHTML = goodsJS[i].price;
                let button = document.createElement("button");
                let cart = `<i class="fas fa-shopping-cart"></i>`;
                button.innerHTML = cart


                ///append card to container
                goodscont.appendChild(card);
                ///append image to card;
                card.appendChild(image);
                /// append imgEle to image container
                image.appendChild(imgEle);
                ///append infocard to card
                card.appendChild(info);
                ///append h2 to info
                info.appendChild(hTow);
                ///append text to h2
                hTow.appendChild(hTowTxt);
                ///append p to info
                info.appendChild(p);
                ///append button to card
                p.appendChild(spanPrice)
                p.appendChild(button);
            }
        }
    }

    ///Request
    myRequest.open("GEt", "./goods.json", true);
    myRequest.send();
}
getGoods();
