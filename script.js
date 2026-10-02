// ==========================================
// MESS MENU
// ==========================================


// ------------------------------------------
// WEEK SETTINGS
// ------------------------------------------

// IMPORTANT:
// Change this to the actual starting date
// of Week 1 in your college schedule.

const week1Start = new Date("2026-06-01");


// ------------------------------------------
// TODAY
// ------------------------------------------

const today = new Date();

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const todayName = days[today.getDay()];


// ------------------------------------------
// DISPLAY DATE
// ------------------------------------------

const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});

document.getElementById("date").textContent =
    formattedDate;


// ------------------------------------------
// CALCULATE WEEK
// ------------------------------------------

const difference =
    today.getTime() - week1Start.getTime();

const daysPassed =
    Math.floor(difference / (1000 * 60 * 60 * 24));

const weekNumber =
    Math.floor(daysPassed / 7) + 1;


const weekType =
    weekNumber % 2 === 0
        ? "EVEN"
        : "ODD";


document.getElementById("weekType").textContent =
    `${weekType} WEEK`;


// ------------------------------------------
// MENU DATA
// ------------------------------------------

const menu = {

    EVEN: {

        Friday: {

            breakfast: `
                Rava Idly, Vada (2)<br>
                Sambar, Tomato Onion Chutney,
                Coconut Chutney<br>
                BBJ, Boiled Groundnuts, Corn Flakes<br>
                Banana (1) / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Phulka, Matki<br>
                Aloo Masala Curry<br>
                Hyderabadi Veg Pulao, Raita<br>
                Gongura Chutney, Papad<br>
                Seasonal Fruit Juice, Lemon and Onion
            `,

            snacks: `
                Mix Veg Maggi (130gm), Tomato Sauce<br>
                Tea, Coffee, Milk, Sugar, Raagi Malt Powder
            `,

            dinner: `
                Tawa Chapathi, Paneer Curry***<br>
                Rice, Sambar, Rasam,
                Cauliflower Peas Poriyal<br>
                Curd, Fryums<br>
                Boondi Laddu (1)
            `
        }

    }

};


// ------------------------------------------
// GET TODAY'S MENU
// ------------------------------------------

const todayMenu = menu[weekType]?.[todayName];


// ------------------------------------------
// DISPLAY TODAY'S MENU
// ------------------------------------------

if (todayMenu) {

    document.getElementById("breakfast").innerHTML =
        todayMenu.breakfast;

    document.getElementById("lunch").innerHTML =
        todayMenu.lunch;

    document.getElementById("snacks").innerHTML =
        todayMenu.snacks;

    document.getElementById("dinner").innerHTML =
        todayMenu.dinner;

}