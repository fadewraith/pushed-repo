'use strict';


const weekdays = ['mon', 'tue', 'wed', 'thu','fri','sat','sun'];

const openingHours = {
    // thu: {
    //     open: 12,
    //     close: 22,
    // },
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    // [weekdays[5]]: {
    //     open: 11,
    //     close: 23,
    // },
    // [`day-${2 + 4}`]: {
    //     open: 0,
    //     close: 24,
    // },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
};



const restaurant = {
    names: 'Classico Italiano',
    locaton: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    
    // openingHours: openingHours,

    //es6 enhanced features
    openingHours,

    // order: function(startedIndex, mainIndex) {
    //     return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
    // },

    //new way of writing methods
    order(startedIndex, mainIndex) {
            return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
        },

    // orderDelivery: function (obj) {
    //     console.log(obj);
    // },

    orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}){
        console.log(`order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    },

    orderPasta(ing1, ing2, ing3) {
        console.log(`here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);

    },
};


//split and join
console.log('a+very+nice+string'.split('+'));

const [firstName, lastName] = 'hello world'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const passenger = "the quick brown foz jump over the bridge";

const capitalizeName = function(name) {
    const names = name.split(' ');
    const namesUpper = [];

    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis');
capitalizeName('hello world');

//padding
const message = 'go to gate 23!';
console.log(message.padStart(25, '+'));
console.log('jonas'.padStart(20, '+').padEnd(30, '+'));


const maskCreditCard = function(number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
}

console.log(maskCreditCard(1234567890));
console.log(maskCreditCard('0987654321'));


//repeat
const message2 = 'bad weather....... all departures delayed...';
console.log(message2.repeat(5));

const planesInLine = function(n) {
    console.log(`there are ${n} planes in line ${'planes'.repeat(n)}`)
}

planesInLine(5);
planesInLine(3);

//strings
// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // fix capitalisation in name
// const passenger = 'jOnAS'; //Jonas
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect);

// //comparing emails
// const email = 'hello@world.com';
// const loginEmail = ' Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);


// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing
// const priceGB = '288,97#';
// const priceUS = priceGB.replace('#', '$').replace(',','.');
// console.log(priceUS);

// const announcement = 'all passengers come to boarding door 23. boarding door 23!';

// // console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// //booleans
// const plane = 'A320neo';
// console.log(plane.includes('A320'));
// console.log(plane.startsWith('A'));
// console.log(plane.endsWith('Ai'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
//     console.log('part of the new airbus family');
// }

// // practice exercise
// const checkBaggage = function(items) {
//     const baggae = items.toLowerCase();
//     if(checkBaggage.includes('knife') || checkBaggage.includes('gun')) {
//         console.log('you are not allowed on board');
//     } else {
//         console.log('welcome aboard');
//     }
// };

// checkBaggage('I have a laptop, some food and a pocket money');
// checkBaggage('Socks and camera');
// checkBaggage('got some snacks and a gun for protection');

// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B373'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.lastIndexOf('portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// //for extracting from the end
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//     //b and e are middle seats
//     const s = seat.slice(-1);
//     if(s === 'B' || s === 'E') console.log('you have got the middle seat');
//     else console.log('you got lucky');
// }

// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(typeof new String('hello world'));
// console.log(typeof new String('hello world').slice(1));

// //map iterators
// const question = new Map([
//     ['question', 'what is the best programming language in the world?'],
//     [1, 'C'],
//     [2, 'Java'],
//     [3, 'Javascript'],
//     ['correct', 3],
//     [true, 'Correct'],
//     [false, 'try again!'],
// ]);

// console.log(question);

// //convert objects to maps
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//     if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('your answer'));
// // console.log(answer);

// // console.log(question.get(question.get('correct') === answer));

// // convert map to an array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

// //maps fundamentals
// let rest = new Map();
// rest.set('name', 'classico italino');
// rest.set(7, 'lisbon, portugal');
// rest.set(1, 'firenze, italy');
// // console.log(rest.set(2, 'lisbon, portugal'));


// //chaining
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23)
// .set(true, 'we are open')
// .set(false, 'we are closed');
// console.log(rest);


// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(1);

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));

// //for deleting on the basis of key
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(7));
// rest.delete(7);
// console.log(rest);
// console.log(rest.size);
// // rest.clear();
// // const arr = [1, 2];
// // rest.set(arr, 'test');
// // console.log(rest);
// // console.log(rest.size);

// // console.log(rest.get(arr));









// //sets
// const ordersSet = new Set(['pasta', 'pizza', 'risotto', 'pizza']);
// console.log(ordersSet);

// console.log(new Set('jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// ordersSet.add('garlic bread');
// ordersSet.add('garlic bread');
// ordersSet.delete('risotto');
// console.log(ordersSet);
// ordersSet.clear(ordersSet);
// console.log(ordersSet);

// //looping on an array
// for (const order of ordersSet) console.log(order);

// //example
// const staff = ['waiter' ,'chef', 'waiter', 'manager', 'chef', 'waiter'];
// // const staffUnique = new Set(staff);
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);
// console.log(new Set(['waiter' ,'chef', 'waiter', 'manager', 'chef', 'waiter']).size);

// console.log(new Set('hello world').size); 




// //accessing property names
// const properties = Object.keys(openingHours);
// console.log(properties);

// // console.log(`we are open on ${properties.length} days`);

// let openStr  = `we are open on ${properties.length} days: `;

// for (const day of properties) {
//     openStr += `${day}, `;
// }

// console.log(openStr);

// //accessing property values
// const values = Object.values(openingHours);
// console.log(values);


// // entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);


// for(const [key, {open, close}] of entries) {
//     // console.log(x);
//     console.log(`on ${key} we open at ${open} and close at ${close}`);
// }




// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri);

// if (restaurant.openingHours.thu) console.log(restaurant.openingHours.thu.open);


// if (restaurant.openingHours && restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);


//with optional chaining
// console.log(restaurant.openingHours.fri?.open); 
// console.log(restaurant.openingHours?.mon?.open); 

// const days = ['mon', 'tue', 'wed', 'thu','fri','sat','sun'];

// for (const day of days) {
//     // console.log(day);
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`on ${day}, we open at ${open}`);
// }

// //optional chaining also works for methods
// console.log(restaurant.order?.(0,1) ?? 'method does not exist');
// console.log(restaurant.orderRisotto?.(0,1) ?? 'method does not exist');

// //optional chaining also works on arrays
// // const users = [
// //     {names: 'jonas', email: 'hello@world.com'},
// // ];

// const users = [];

// console.log(users[0]?.names ?? 'user array empty');
   


// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// //for-of loop
// for (const item of menu) console.log(item);
// for(const item of menu.entries()){
//     console.log(`${item[0] + 1}: ${item[1]}`);
// }

// //other way of doing it
// for(const [i,el] of menu.entries()) {
//     console.log(`${i + 1}: ${el}`);
// }

// console.log([...menu.entries()]);

// const rest1 = {
//     name: 'Capri',
//     // numGuests: 20,
//     numGuests: 0,
// };

// const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
// };


// // or assignment operator
// // rest1.numGuests = rest1.numGuests || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// //nullish assingment operator
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// //and assignment operator
// rest1.owner = rest1.owner && '<hello world>';
// rest2.owner = rest2.owner && '<hello world>';

// rest1.owner &&= '<hello world>';
// rest1.owner &&= '<hello world>';

// console.log(rest1);
// console.log(rest2);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);


// console.log('abc' || 3);

// // restaurant.numGuests = 23;
// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);


// console.log('---------- AND ----------');

// console.log(7 && 'jonas');

// if (restaurant.orderPizza) {
//     restaurant.orderPizza('mushrooms','spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms','spinach');