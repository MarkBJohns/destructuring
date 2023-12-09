// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      OBJECT DESTRUCTURING 1

// console.log(numPlanets); will return 8
// console.log(yearNeptuneDiscovered); will return 1846

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      OBJECT DESTRUCTURING 2

// console.log(discoveryYears); will return
//      {yearNeptuneDiscovered:     1846,
//       yearMarsDiscoverd:         1659};

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      OBJECT DESTRUCTURING 3

// getUserData({firstName: "Alejandro", favoriteColor: "purple"}) will return
//      "Your name is Alejandro and you like purple"

// getUserData({firstName: "Melissa"}) will return
//      "Your name is Melissa and you like green"

// getUserData({}) will return
//      "Your name is undefined and you like green"

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      ARRAY DESTRUCTURING 1

// console.log(first); will return "Maya"
// console.log(second); will return "Marisa"
// console.log(third); will return "Chi"

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      ARRAY DESTRUCTURING 2

// console.log(raindrops); will return 'Raindrops on roses'
// console.log(whiskers); will return 'whiskers on kittens'
// console.log(aFewOfMyFavoriteThings); will return
//      ['Bright copper kettles','warm woolen mittens','Brown paper packages tied up with strings']

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      ARRAY DESTRUCTURING 3

// console.log(numbers); will return [10,30,20]

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      OBJECT DESTRUCTURING

const obj={numbers:{a:1,b:2}};

const {numbers:{a,b}}=obj; 

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      ARRAY SWAP

let arr=[1,2];

[arr[0],arr[1]]=[arr[1],arr[0]];

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      RACE RESULTS

const raceResults=([gold,silver,bronze,...rest])=>({gold,silver,bronze,rest});