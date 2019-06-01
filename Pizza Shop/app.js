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
    // End of navbar script



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
// End of slide show



// Event listners
document.getElementById('log').addEventListener('click', log);
document.getElementById('sign').addEventListener('click', sign);

document.getElementById('promo').addEventListener('click', promo);
document.getElementById('pizza').addEventListener('click', pizza);
document.getElementById('pasta').addEventListener('click', promo);
document.getElementById('sides').addEventListener('click', pizza);
document.getElementById('beverages').addEventListener('click', promo);
document.getElementById('findahut').addEventListener('click', pizza);
document.getElementById('coupons').addEventListener('click', pizza);
// End of Event Listners

// Create log in Function
function log() {

    const hasi = document.getElementById('hasi');

    hasi.innerHTML = `<div class="container">
    <div class="row" id='signin'>
        <div class="col-md-6 mx-auto">
            <h1>Log In</h1>
            <form>

                <div class="form-group">
                    <label for="">SE Number</label>
                    <input type="text" class="form-control" id="se-number" placeholder="SE/201*/0**">
                    <div class="invalid-feedback">
                        Enter a Valid SE Number
                    </div>
                </div>

                <div class="form-group">
                    <label for="">Email:</label>
                    <input type="text" class="form-control" id="email" placeholder="Email">
                    <div class="invalid-feedback">
                        Enter a Valid Email
                    </div>
                </div>

                <input type="submit" name="submit" value="Submit" class="btn btn-info btn-block" id="submit">
            </form>
        </div>
    </div>
</div>`;

    //Form Blur Event Listners

    document.getElementById('se-number').addEventListener('keyup', validateSeNumber);
    document.getElementById('email').addEventListener('keyup', validateEmail);

    document.getElementById('se-number').addEventListener('blur', validateSeNumber);
    document.getElementById('email').addEventListener('blur', validateEmail);

    document.getElementById('submit').addEventListener('click', (e) => {
        document.window.reload();
        e.preventDefault();
    });






    function validateSeNumber() {
        const seNumber = document.getElementById('se-number');
        const re = /^SE\/201[2-7]\/0[0-5][0-5]$/;

        if (!re.test(seNumber.value)) {
            seNumber.classList.add('is-invalid');
        } else {
            seNumber.classList.remove('is-invalid');
        }
    }

    function validateEmail() {
        const email = document.getElementById('email');
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

        if (!re.test(email.value)) {
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
        }
    }

}
// End of log in function

// Create Sign in Function
function sign() {

    const hasi = document.getElementById('hasi');

    hasi.innerHTML = `<div class="container">
    <div class="row" id='signin'>
        <div class="col-md-6 mx-auto">
            <h1>Create Account</h1>
            <form>
                <div class="form-group">
                    <label for="">Name:</label>
                    <input type="text" class="form-control" id="name" placeholder="Name">
                    <div class="invalid-feedback">
                        Name Must be Between 2 and 10 Charecters
                    </div>
                </div>

                <div class="form-group">
                    <label for="">SE Number</label>
                    <input type="text" class="form-control" id="se-number" placeholder="SE/201*/0**">
                    <div class="invalid-feedback">
                        Enter a Valid SE Number
                    </div>
                </div>

                <div class="form-group">
                    <label for="">Email:</label>
                    <input type="text" class="form-control" id="email" placeholder="Email">
                    <div class="invalid-feedback">
                        Enter a Valid Email
                    </div>
                </div>

                <div class="form-group">
                    <label for="">Phone:</label>
                    <input type="text" class="form-control" id="phone" placeholder="Phone">
                    <div class="invalid-feedback">
                        Enter A Valid Phone Number
                    </div>
                </div>
                <input type="submit" name="submit" value="Submit" class="btn btn-info btn-block" id="submit">
            </form>
        </div>
    </div>
</div>`;

    //Form Blur Event Listners

    document.getElementById('name').addEventListener('keyup', validateName);
    document.getElementById('se-number').addEventListener('keyup', validateSeNumber);
    document.getElementById('email').addEventListener('keyup', validateEmail);
    document.getElementById('phone').addEventListener('keyup', validatePhone);

    document.getElementById('name').addEventListener('blur', validateName);
    document.getElementById('se-number').addEventListener('blur', validateSeNumber);
    document.getElementById('email').addEventListener('blur', validateEmail);
    document.getElementById('phone').addEventListener('blur', validatePhone);

    document.getElementById('submit').addEventListener('click', (e) => {
        document.window.reload();
        e.preventDefault();
    });




    function validateName() {
        const name = document.getElementById('name');
        const re = /^[a-zA-Z]{2,10}$/;

        if (!re.test(name.value)) {
            name.classList.add('is-invalid');
        } else {
            name.classList.remove('is-invalid');
        }
    }

    function validateSeNumber() {
        const seNumber = document.getElementById('se-number');
        const re = /^SE\/201[2-7]\/0[0-5][0-5]$/;

        if (!re.test(seNumber.value)) {
            seNumber.classList.add('is-invalid');
        } else {
            seNumber.classList.remove('is-invalid');
        }
    }

    function validateEmail() {
        const email = document.getElementById('email');
        const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

        if (!re.test(email.value)) {
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
        }
    }

    function validatePhone() {
        const phone = document.getElementById('phone');
        const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

        if (!re.test(phone.value)) {
            phone.classList.add('is-invalid');
        } else {
            phone.classList.remove('is-invalid');
        }
    }
}
// End of Sign in function


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