// ============================================================
// MESS MENU WEBSITE
// ============================================================


// ============================================================
// 1. WEEK SETTINGS
// ============================================================

// August 5, 2026 = Week 1 = ODD WEEK
const week1Start = new Date("2026-08-05");


// ============================================================
// 2. TODAY'S DATE
// ============================================================

const today = new Date();


// Sunday = 0
// Monday = 1
// Tuesday = 2
// Wednesday = 3
// Thursday = 4
// Friday = 5
// Saturday = 6

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


// ============================================================
// 3. DISPLAY TODAY'S DATE
// ============================================================

const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
});

document.getElementById("date").textContent = formattedDate;


// ============================================================
// 4. CALCULATE WEEK NUMBER
// ============================================================

const difference =
    today.getTime() - week1Start.getTime();

const daysPassed =
    Math.floor(difference / (1000 * 60 * 60 * 24));


// Week 1, Week 2, Week 3...
const weekNumber =
    Math.floor(daysPassed / 7) + 1;


// ============================================================
// 5. DETERMINE ODD / EVEN WEEK
// ============================================================

const weekType =
    weekNumber % 2 === 0
        ? "EVEN"
        : "ODD";


// Display week
document.getElementById("weekType").textContent =
    `${weekType} WEEK`;


// ============================================================
// 6. MENU DATA
// ============================================================

const menu = {

    // ========================================================
    // EVEN WEEK
    // ========================================================

    EVEN: {

        // ----------------------------------------------------
        // SUNDAY
        // ----------------------------------------------------

        Sunday: {

            breakfast: `
                Onion Carrot Uttapam<br>
                Sambar, Coconut Chutney<br>
                BBJ, Sprouts, Sundal<br>
                Seasonal Cut Fruits / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Tawa Chapathi, Sev Tomato Gravy<br>
                Veg Cutlet (2)<br>
                Hyderabadi Paneer Biryani, Raitha /
                Hyderabadi Chicken Biryani, Raitha<br>
                Ice Cream (1)<br>
                Salad, Lemon and Onion
            `,

            snacks: `
                Bhel Puri<br>
                Tea, Coffee, Milk, Sugar, Boost Sachets
            `,

            dinner: `
                Peanut Coconut Rice, Veg Kurma<br>
                Phulka, Gutti Vankaya Curry<br>
                Curd<br>
                Gulab Jamun (2)
            `
        },


        // ----------------------------------------------------
        // MONDAY
        // ----------------------------------------------------

        Monday: {

            breakfast: `
                Poori<br>
                Aloo Masala Curry<br>
                BBJ, Boiled Groundnuts, Corn Flakes<br>
                Banana (1) / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Pulkha, Garlic Tomato Curry<br>
                Bhindi Masala Fry (Dry), Kerela Sadiya<br>
                Rice, Vathakol Ambu, Curd<br>
                Fryums, Pickle<br>
                Sugar, Salt, Ghee, Podi<br>
                Seasonal Fruit Juice, Lemon and Onion
            `,

            snacks: `
                Sundal (Boiled Channa Black,
                Boiled Green Gram Dal)<br>
                Tea, Coffee, Milk, Sugar, Raagi Malt Powder
            `,

            dinner: `
                Chole Bature, Idiyappam<br>
                Bagara Rice, Black Channa Curry<br>
                Buttermilk, Onion<br>
                Paruppu Payasam with Jaggery
            `
        },


        // ----------------------------------------------------
        // TUESDAY
        // ----------------------------------------------------

        Tuesday: {

            breakfast: `
                Ragi Dosa, Upma<br>
                Sambar, Groundnut Chutney,
                Coconut Chutney<br>
                BBJ, Sprouts, Sundal<br>
                Seasonal Cut Fruits / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Tawa Chapathi, Palak Paneer Curry<br>
                Andhra Tomato Dal, Moolaikeerai Poriyal<br>
                Jeera Rice, Rice, Rasam, Curd<br>
                Papad, Pickle<br>
                Sugar, Salt, Ghee, Podi<br>
                Salad, Lemon and Onion
            `,

            snacks: `
                Kaara Paniyaram (4),
                Tomato Onion Chutney<br>
                Tea, Coffee, Milk, Sugar, Boost Sachets
            `,

            dinner: `
                Idli, Sambar, Karam Podi,
                Tomato Onion Chutney, Ghee<br>
                Lemon Rice, Curd Rice, Potato Poriyal<br>
                Pickle<br>
                Sweet Pongal***
            `
        },


        // ----------------------------------------------------
        // WEDNESDAY
        // ----------------------------------------------------

        Wednesday: {

            breakfast: `
                Masala Dosa<br>
                Sambar, Mint Chutney,
                Coconut Chutney<br>
                BBJ, Boiled Groundnuts, Corn Flakes<br>
                Banana (1) / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Pulkha, Yellow Channa Dal Masala<br>
                Kovakai Fry, Avarakkai Poriyal<br>
                Rice, Sambar, Rasam, Curd<br>
                Fryums, Pickle<br>
                Sugar, Salt, Ghee, Podi<br>
                Seasonal Fruit Juice, Lemon and Onion
            `,

            snacks: `
                Banana Bajji (3),
                Kadalai Chutney and Tomato Sauce<br>
                Tea, Coffee, Milk, Sugar, Raagi Malt Powder
            `,

            dinner: `
                Special Dinner
            `
        },


        // ----------------------------------------------------
        // THURSDAY
        // ----------------------------------------------------

        Thursday: {

            breakfast: `
                Chow Chow Bath<br>
                Mysore Bonda (3), Coconut Chutney<br>
                BBJ, Sprouts, Sundal<br>
                Seasonal Cut Fruits / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Tawa Chapathi, Paneer Peas Curry<br>
                Gobi Fry***, Spinach Kootu<br>
                Rice, Sambar, Rasam, Curd<br>
                Fryums, Pickle<br>
                Sugar, Salt, Ghee, Podi<br>
                Salad, Lemon and Onion
            `,

            snacks: `
                Sweet Corn (half piece - 6cm)<br>
                Tea, Coffee, Milk, Sugar, Boost Sachets
            `,

            dinner: `
                Tawa Chapathi, Veg Biryani<br>
                Aloo Curry, Raitha<br>
                Butter Milk<br>
                Pineapple Kesari***
            `
        },


        // ----------------------------------------------------
        // FRIDAY
        // ----------------------------------------------------

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
                Sugar, Salt, Ghee, Podi<br>
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
        },


        // ----------------------------------------------------
        // SATURDAY
        // ----------------------------------------------------

        Saturday: {

            breakfast: `
                Methi Paratha<br>
                Kabuli Channa Masala, Curd,
                Pickle, Tomato Ketchup<br>
                BBJ, Sprouts, Sundal<br>
                Seasonal Cut Fruits / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Tawa Chapathi, Baigan Methi Curry<br>
                Chilli Soya Bean Dry***, Perugu Pachadi<br>
                Rice, Sambar, Rasam<br>
                Papad, Pickle<br>
                Sugar, Salt, Ghee, Podi<br>
                Banana Juice, Lemon and Onion
            `,

            snacks: `
                Aloo Samosa (2),
                Tomato Sauce, Mint Chutney<br>
                Tea, Coffee, Milk, Sugar, Boost Sachets
            `,

            dinner: `
                Millet Dosa, Peanut Chutney<br>
                Plain Rice, Mixed Dal<br>
                Butter Milk, Papad<br>
                Bread Halwa***
            `
        }

    },


    // ========================================================
    // ODD WEEK
    // ========================================================

    ODD: {

        // ----------------------------------------------------
        // SUNDAY
        // ----------------------------------------------------

        Sunday: {

            breakfast: `
                Rava Dosa, Semiya Upma<br>
                Sambar, Coconut Chutney,
                Groundnut Chutney<br>
                BBJ, Boiled Groundnuts, Corn Flakes<br>
                Seasonal Cut Fruits / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Tawa Chapathi<br>
                Panner Kofta Curry / Chicken Curry<br>
                Veg Biryani, Raitha<br>
                Badusha (1)<br>
                Seasonal Fruit Juice, Ice Cream (1)<br>
                Salad, Lemon and Onion
            `,

            snacks: `
                Pani Puri (6),
                Green Chutney, Tamarind Chutney<br>
                Tea, Coffee, Milk, Sugar,
                Raagi Malt Powder
            `,

            dinner: `
                Chapatti, Mix Veg Curry (Punjabi Style)<br>
                Tamarind Rice, Buttermilk,
                Aloo Bhujia Sabji, Fryums<br>
                Pickle, Ghee<br>
                Seasonal Cut Fruits**, Turmeric Milk
            `
        },


        // ----------------------------------------------------
        // MONDAY
        // ----------------------------------------------------

        Monday: {

            breakfast: `
                Pongal, Vada (3)<br>
                Sambar, Coconut Chutney,
                Groundnut Chutney<br>
                BBJ, Sprouts, Sundal<br>
                Banana (1) / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Pulkha, Dal Makhani<br>
                Yam Fry, Plantain Poriyal<br>
                Rice, Sambar, Rasam, Curd<br>
                Pickle, Papad<br>
                Sugar, Salt, Ghee, Podi<br>
                Seasonal Fruit Juice, Lemon and Onion
            `,

            snacks: `
                Pasta<br>
                Tea, Coffee, Milk, Sugar,
                Boost Sachets
            `,

            dinner: `
                Chole Bature, Onion Mirch Salad<br>
                Rice, Snake Gourd Kootu<br>
                Curd, Rasam<br>
                Banana (1)<br>
                Bread Halwa
            `
        },


        // ----------------------------------------------------
        // TUESDAY
        // ----------------------------------------------------

        Tuesday: {

            breakfast: `
                Ponnaganni Keerai
                (Dwarf Copperleaf) Dosa<br>
                Sambar, Coconut Chutney,
                Tomato Chutney<br>
                BBJ, Boiled Groundnuts, Corn Flakes<br>
                Seasonal Cut Fruits / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Tawa Chapathi, Dum Aloo<br>
                Beans Carrot Poriyal<br>
                Rice, Panchratan Dal,
                Rasam, Curd, Fryums<br>
                Pickle<br>
                Sugar, Salt, Ghee, Podi<br>
                Salad, Lemon and Onion
            `,

            snacks: `
                Kambu Kozhukattai (2)
                with Coconut Chutney<br>
                Tea, Coffee, Milk, Sugar,
                Raagi Malt Powder
            `,

            dinner: `
                Tawa Chapathi, Channa Masala<br>
                Rice, Sambar, Beetroot Poriyal,
                Buttermilk<br>
                Fryums<br>
                Badam Milk Hot, Vermicelli Payasam
            `
        },


        // ----------------------------------------------------
        // WEDNESDAY
        // ----------------------------------------------------

        Wednesday: {

            breakfast: `
                Puri<br>
                Channa Masala<br>
                BBJ, Sprouts, Sundal<br>
                Banana (1) / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Pulkha, Soya Curry<br>
                Onion Pakoda***, Perugu Pachadi<br>
                Rice, Rasam, Sambar, Papad,
                Cabbage Moongdal Coconut Poriyal<br>
                Pickle<br>
                Sugar, Salt, Ghee, Podi<br>
                Seasonal Fruit Juice, Lemon and Onion
            `,

            snacks: `
                Boiled Groundnuts Chat<br>
                Tea, Coffee, Milk, Sugar,
                Boost Sachets
            `,

            dinner: `
                Phulka, Kambu (Pearl Millet) Idli<br>
                Sambar, Tomato Onion Chutney<br>
                Dal Fry, Buttermilk<br>
                Sabudhana Kheer,
                Khulfi (1)
            `
        },


        // ----------------------------------------------------
        // THURSDAY
        // ----------------------------------------------------

        Thursday: {

            breakfast: `
                Wheat Rava Upma, Poha<br>
                Mysore Bonda (3), Groundnut Chutney<br>
                BBJ, Boiled Groundnuts, Corn Flakes<br>
                Seasonal Cut Fruits / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Tawa Chapathi<br>
                Kadai Panner***<br>
                Rice, Masala Sambar,
                Curd, Fryums, Spinach Kootu<br>
                Pickle<br>
                Sugar, Salt, Ghee, Podi<br>
                Salad, Lemon and Onion
            `,

            snacks: `
                Dahi Vada (2), Kara Boondi<br>
                Tea, Coffee, Milk, Sugar,
                Raagi Malt Powder
            `,

            dinner: `
                Wheat Paratha, Panner Kofta Curry<br>
                Rice, Sambar, Rasam,
                Kovakai Poriyal<br>
                Onion Salad, Curd<br>
                Badam Milk Hot, Vermicelli Payasam
            `
        },


        // ----------------------------------------------------
        // FRIDAY
        // ----------------------------------------------------

        Friday: {

            breakfast: `
                Rava Idli, Vada (3)<br>
                Sambar, Coconut Chutney,
                Groundnut Chutney<br>
                BBJ, Sprouts, Sundal<br>
                Banana (1) / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Phulka, Rajma Curry<br>
                Jeera Rice, Drumstick Leaves Sambar<br>
                Rice, Rasam, Curd, Fryums,
                Aloo Bhujia Sabji<br>
                Gongura Chutney<br>
                Sugar, Salt, Ghee, Podi<br>
                Seasonal Fruit Juice, Lemon and Onion
            `,

            snacks: `
                Masala Vada (3),
                Pottukadalai Chutney<br>
                Tea, Coffee, Milk, Sugar,
                Boost Sachets
            `,

            dinner: `
                Set Dosa, Veg Pulao<br>
                Vada Curry<br>
                Raitha, Buttermilk<br>
                Kesari Bath***
            `
        },


        // ----------------------------------------------------
        // SATURDAY
        // ----------------------------------------------------

        Saturday: {

            breakfast: `
                Aloo Paratha<br>
                Channa Masala, Curd, Pickle,
                Tomato Ketchup<br>
                BBJ, Boiled Groundnuts<br>
                Seasonal Cut Fruits / Boiled Egg (1)<br>
                Tea, Coffee, Milk, Sugar, Salt
            `,

            lunch: `
                Tawa Chapathi, Bhindi Dry Fry<br>
                Lauki Chana Dal, Gobi 65***<br>
                Rice, Rasam, Curd, Sambar, Papad,
                Raw Banana and Yam Aviyal<br>
                Pickle<br>
                Sugar, Salt, Ghee, Podi<br>
                Banana Juice, Lemon and Onion
            `,

            snacks: `
                Millet Puttu, Black Chickpea Curry<br>
                Tea, Coffee, Milk, Sugar,
                Raagi Malt Powder
            `,

            dinner: `
                Pulka, Channa Peas Palak<br>
                Sambar Rice, Curd Rice,
                Soya Chilli<br>
                Kara Boondi, Pickle<br>
                Gulam Jamun (2)
            `
        }

    }

};


// ============================================================
// 7. GET TODAY'S MENU
// ============================================================

const todayMenu =
    menu[weekType]?.[todayName];


// ============================================================
// 8. DISPLAY TODAY'S MENU
// ============================================================

if (todayMenu) {

    document.getElementById("breakfast").innerHTML =
        todayMenu.breakfast;

    document.getElementById("lunch").innerHTML =
        todayMenu.lunch;

    document.getElementById("snacks").innerHTML =
        todayMenu.snacks;

    document.getElementById("dinner").innerHTML =
        todayMenu.dinner;

} else {

    document.getElementById("breakfast").textContent =
        "Menu not available.";

    document.getElementById("lunch").textContent =
        "Menu not available.";

    document.getElementById("snacks").textContent =
        "Menu not available.";

    document.getElementById("dinner").textContent =
        "Menu not available.";
}


// ============================================================
// 9. CONSOLE INFORMATION
// ============================================================

console.log("Today's date:", formattedDate);
console.log("Today's day:", todayName);
console.log("Week number:", weekNumber);
console.log("Week type:", weekType);
