let products = [
    {
        id: 2536,
        name: "Sony Professional 32GB XQD",
        price: 500,
        category: "Storage",
        description: "The new XQD cards achieve Max read",
        image: "./images/sony.jpg",
    },
    {
        id: 2537,
        name: "Lenovo Legion 15.6 Gaming",
        price: 4228,
        category: "Laptops",
        description:
            "Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design",
        image: "./images/lenovo.jpg",
    },
    {
        id: 2538,
        name: "ASUS ROG GL552VW-DH71",
        price: 5300,
        category: "Laptops",
        description:
            "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
        image: "./images/asus.jpg",
    },
    {
        id: 2539,
        name: "Logitech C505/C505e HD Wired Webcam",
        price: 149,
        category: "Webcams",
        description:
            "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro",
        image: "./images/webcam_logitech.png",
    },
    {
        id: 2540,
        name: "JBL Boombox Portable Bluetooth Waterproof Speaker",
        price: 990,
        category: "Speakers",
        description:
            "Epic sound. All day long. Made to be the most powerful, portable Bluetooth speaker, JBL Boombox delivers monstrous sound along with the hardest hitting bass. Enjoy music for 24 hours without missing a beat. Imagine playing with your favorite beats from sunrise to sunrise on a single charge. ",
        image: "./images/jbl_speaker.jpg",
    },
    {
        id: 2541,
        name: "TOOBUR Smart Watch Alexa Built-in",
        price: 180,
        category: "Watches",
        description:
            "	Alexa Built-in, Compatible with Bluetooth Calls, iPhone & Android Compatible, Notifications, Heart Rate, Sleep Tracker, Oxymeter (SpO2), Step Calorie Counter, Activity Tracker, 100 Sport Modes, IP68 Waterproof, Find My PhoneAlexa Built-in, Compatible with Bluetooth Calls, iPhone & Android Compatible, Notifications, Heart Rate, Sleep Tracker, Oxymeter (SpO2), Step Calorie Counter, Activity Tracker, 100 Sport Modes, IP68 Waterproof, Find My Phone",
        image: "./images/toobur_watches.jpg",
    },
];

// לכתוב פונקציה שתפקידה להציג את המוצרים בקארדים של בוטסטרפ
// שלושה קארדים בשורה
// תמונה של המוצר, שם המוצר, קטגוריה וכפתור לפרטים מלאים

function showProducts() {
    for (let i = 0; i < products.length; i++) {
        document.getElementById("products").innerHTML +=
            `<div class="col-md-4 mt-3">
            <div class="card" style="width: 18rem;margin:0 auto;">
        <img src="${products[i].image}" class="card-img-top" alt="${products[i].name}">
            <div class="card-body">
                <h5 class="card-title">${products[i].name}</h5>
                <p class="card-text">${products[i].category}</p>
                <a data-bs-toggle="modal" data-bs-target="#infoModal" class="btn btn-primary w-100" onclick="setModal(${i})">See more</a>
            </div>
            </div>
</div>`;
    }
}
showProducts();

// לכתוב פונקציה שמזינה את פרטי המוצר למודאל על סמך אינדקס
function setModal(index) {
    document.getElementById("title").innerHTML = products[index].name;
    document.getElementById("mbody").innerHTML = `<p><b>Serial Number:</b>${products[index].id}</p>
    <p><b>Category:</b>${products[index].category}</p>
    <p><b>Description:</b>${products[index].description}</p>
    <h4 class="text-end"><b>Price:</b>${products[index].price}</h4>`

}


