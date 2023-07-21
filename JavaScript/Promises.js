new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: "Yash", pwd: "42069" });
    } else {
      reject("Something went wrong!");
    }
  }, 1000);
})
  .then(() => {
    console.log("Resolved");
  })
  .catch(() => {
    console.log("Rejected");
  })
  .finally(() => {
    console.log("We're done brazaa!!!");
  });

// With Async/Await

const PromiseTwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: "GoGo", pwd: "42069" });
    } else {
      reject("How dumb are you?");
    }
  }, 1000);
});

async function login() {
  try {
    const user = await PromiseTwo;
    console.log(user);
  } catch (err) {
    console.log(err);
  }
}

login();

// async function getUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E :", error);
//   }
// } 

// getUsers();

fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
console.log("Error has occured while getting data");
})