new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: "Yash", pwd: "42069" });
    } else {
      reject("Something went wrong!");
    }
  }, 1000);
}).then(()=>{
    console.log("Resolved")
}).catch(()=>{
    console.log("Rejected");
}).finally(()=>
{
    console.log("We're done brazaa!!!");
});
