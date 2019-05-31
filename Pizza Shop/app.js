// Navbar Auto show when scroll up
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

// Slide Show
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}



//Pizza
function pizza(e) {

    const xhr = new XMLHttpRequest();

    xhr.open('GET', './pizza.json', true);

    xhr.onload = function() {
        if (this.status === 200) {

            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customers) {
                output += `
                <div class="card col-md-4" style="width: 18rem;">
                <img class="card-img-top" src="${customers.Images}">            
                <div class="card-body">
                        <h3 class="card-title">${customers.Name}</h3>
                        <h5 class="card-title">${customers.Price}</h5>
                        <p class="card-text">${customers.Size}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>`;
            });


            document.getElementById('hasi').innerHTML = output;

        }
    }

    xhr.send();
    // e.preventDefault();
}

pizza();

document.getElementById('promo').addEventListener('click', promo);


function promo(e) {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', './promo.json', true);

    xhr.onload = function() {
        if (this.status === 200) {

            const customers = JSON.parse(this.responseText);

            let output = '';

            customers.forEach(function(customers) {
                output += `
                <div class="card col-md-4" style="width: 18rem;">
                <img class="card-img-top" src="${customers.Images}">            
                <div class="card-body">
                        <h3 class="card-title">${customers.Name}</h3>
                        <h5 class="card-title">${customers.Price}</h5>
                        <p class="card-text">${customers.Size}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                    </div>`;
            });


            document.getElementById('hasi').innerHTML = output;

        }
    }

    xhr.send();
    e.preventDefault();
}