//for (let age = 30; age < 40; age++) {
  //  console.log(`I'm ${age} years old. Happy birthday to me!`);
  //  debugger;
 // }

  //const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
    //debugger;
  //}

  //return gifts;
//}

//wrapGifts(gifts);

const thankYous = ["Penny", "Matt", "Ding"]; 

function writeCards(thankYous) {
    for (let i = 0; i < thankYous.length; i++) {
        console.log(`Thank you, ${thankYous[i]} for the well wishes!`)
       }
       return thankYous;
}

writeCards(thankYous)

let countDown = 10; 
while (countDown > -1) {
    console.log(countDown--)
}