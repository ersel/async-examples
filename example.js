const readFileWithPromise = require("./readFileWithPromise");

let numbers = [1, 2, 3, 4];
let doubles = numbers.map((x) => x * 2); // sync

// METHOD 3: async/await
const readTwoFiles = async () => {
  try {
    const customerData = await readFileWithPromise("./customersasdasdsad.csv");
    const orderData = await readFileWithPromise("./orders.csv");
    console.log("customer data:", customerData);
    console.log("order data:", orderData);
  } catch (error) {
    console.log(error);
  }
  console.log("Continue from here...");
};

readTwoFiles();
/* METHOD 2: PROMISES
// CALLBACK HELL
readFileWithPromise("./customers.csv")
  .then((customerData) => {
    readFileWithPromise("./orders.csv")
      .then((orderData) => {
        console.log("customer data:", customerData);
        console.log("order data:", orderData);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });
*/

/* METHOD 1: CALLBACKS
// CALLBACK HELL
fs.readFile("./customers.csv", {}, (error, data) => {
  // async
  if (error) {
    console.log("Something went wrong whilst reading customers.");
  } else {
    const customerData = data.toString();
    fs.readFile("./orders.csv", {}, (error, data) => {
      if (error) {
        console.log("Something went wrong whilst reading orders.");
      } else {
        const orderData = data.toString();
      }
    });
  }
});
*/
