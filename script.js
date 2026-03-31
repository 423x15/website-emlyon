// console.log("Hello world");

const MyName = "Alexis";

let MyAge = 23;
// litteral template : ``
// console.log(`${MyName} is ${MyAge} years old.`);

// if (MyAge >= 18) {
//     console.log(`${MyName} is an adult.`);
// } else {
//     console.log(`${MyName} is a minor.`);
// }   

// if (MyName === "Alexis") {
//     console.log("Hello Alexis!");
// } else {
//     console.log("Hello stranger!");
// }

const Fruits = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(Fruits[0]); // apple
// console.log(Fruits[4]); // elderberry

// Fruits.push("fig");
// console.log(Fruits); // ["apple", "banana", "cherry", "date", "elderberry", "fig"]

// Fruits.forEach((fruit) => {
//     console.log(fruit);
// });

// const fruit = {
//     name: "apple",
//     color: "red",
//     weight: 150,
//     isRipe: true,   
// };

// console.log(fruit.name); // apple
// console.log(fruit.color); // red
// console.log(fruit.weight); // 150
// console.log(fruit.isRipe); // true      
// const SayHello = (name, age) => {
//     console.log(`Hello, ${name}! You are ${age} years old.`);
// };
// SayHello("Alice", 30); // Hello, Alice! You are 30 years old.

// DOM manipulation
// const target = document.querySelector("h3");
// target.innerHTML = "Hello JavaScript!"; // Change the content of the h3 element
// const targets = document.querySelectorAll("h3");
// console.log(targets); // NodeList of all h3 elements
// targets[0].style.color = "red"; // Change the color of the first h3 element to red

// Event listener
// const myButton = document.querySelector("button");

// myButton.addEventListener("click", () => {
    
//     const body = document.querySelector("body");
//     body.style.backgroundColor = "lightblue"; // Change the background color of the page 
// });

// const myButton = document.querySelector("button");

// myButton.addEventListener("click", () => {
//     // get the message from the input field
//     const message = document.querySelector("input");
//     console.log(message.value);

//     // add the message to the list of suggestions
//     const list = document.querySelector("ul");
//     const listItem = document.createElement("li");
//     listItem.textContent = message.value;
//     list.appendChild(listItem);
    
//     // clear the input field
//     message.value = "";
// });


[
  {
    "event_name": "Trail des Alpes de Toulouse",
    "images": [
      "https://plus.unsplash.com/premium_photo-1664300158559-35de2ebdd9d1?q=80&w=2070&auto=format&fit=crop…",
      "https://images.unsplash.com/photo-1504025468847-0e438279542c?q=80&w=2469&auto=format&fit=crop&ixlib…"
    ],
    "event_type": "trail",
    "date": "4 avril 2026",
    "location": "46.716,1.108,13",
    "city": "Toulouse",
    "department": "31",
    "registrations": {
      "opening": {
        "date": "15 janvier 2026",
        "time": "12:00"
      },
      "closing": {
        "date": "25 mars 2026",
        "time": "23:59"
      }
    },
    "description": "Un événement trail accessible à tous, avec plusieurs distances et des paysages variés.",
    "races": [
      {
        "name": "Trail 10 km",
        "distance": "10",
        "elevation_gain": "389",
        "start_time": "09:00",
        "price": "15"
      },
      {
        "name": "Trail 30 km",
        "distance": "30",
        "elevation_gain": "845",
        "start_time": "08:00",
        "price": "32"
      }
    ]
  },
  {
    "event_name": "Trail des Forêts de Dijon",
    "images": [
      "https://images.unsplash.com/photo-1623390003553-4fa3f9fceb89?q=80&w=2070&auto=format&fit=crop&ixlib…",
      "https://images.unsplash.com/photo-1588038265723-9bd2a2b03a82?q=80&w=2069&auto=format&fit=crop&ixlib…"
    ],
    "event_type": "trail",
    "date": "31 mai 2026",
    "location": "44.429,4.28,13",
    "city": "Dijon",
    "department": "21",
    "registrations": {
      "opening": {
        "date": "15 janvier 2026",
        "time": "12:00"
      },
      "closing": {
        "date": "21 mai 2026",
        "time": "23:59"
      }
    },
    "description": "Un événement trail accessible à tous, avec plusieurs distances et des paysages variés.",
    "races": [
      {
        "name": "Trail 10 km",
        "distance": "10",
        "elevation_gain": "341",
        "start_time": "09:00",
        "price": "19"
      },
      {
        "name": "Trail 30 km",
        "distance": "30",
        "elevation_gain": "1431",
        "start_time": "08:00",
        "price": "37"
      }
    ]
  },
  {
    "event_name": "Trail des Lacs de Lyon",
    "images": [
      "https://images.unsplash.com/photo-1699959560616-aa17ace76879?q=80&w=2128&auto=format&fit=crop&ixlib…",
      "https://plus.unsplash.com/premium_photo-1661899159300-fd541b7b1efb?q=80&w=987&auto=format&fit=crop&…"
    ],
    "event_type": "trail",
    "date": "19 mai 2026",
    "location": "44.118,5.241,13",
    "city": "Lyon",
    "department": "69",
    "registrations": {
      "opening": {
        "date": "15 janvier 2026",
        "time": "12:00"
      },
      "closing": {
        "date": "9 mai 2026",
        "time": "23:59"
      }
    },
    "description": "Un événement trail accessible à tous, avec plusieurs distances et des paysages variés.",
    "races": [
      {
        "name": "Trail 10 km",
        "distance": "10",
        "elevation_gain": "436",
        "start_time": "09:00",
        "price": "20"
      },
      {
        "name": "Trail 25 km",
        "distance": "25",
        "elevation_gain": "884",
        "start_time": "08:00",
        "price": "29"
      }
    ]
  }
]