/*
Promises is a constructor

States
Pending state
Resolve State
Reject State
*/


// Example 1
const p = new Promise((resolve, reject) => resolve(42));

p.then((value) => { console.log("Promise Fulfilled:", value) },
(error) => { console.log("Promise Rejected: ", error) });


// Example 2
const pizza = new Promise((resolve) => {
  console.log("Getting your pizza in 5 seconds...");
  setTimeout(() => {
    resolve("Onion Pizza");
    }, 5000);
});

pizza.then(
  (item) => { console.log(`Order Received: ${item}`) },
  (error) => { console.log("Something went wrong with your pizza") });
