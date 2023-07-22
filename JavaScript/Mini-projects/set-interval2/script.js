
let randomColour = function () {
  const rand = Math.floor(Math.random() * 111111);
  const paddedNum = rand.toString().padStart(6, "0");
  const randCol = "#" + paddedNum;
  return randCol;
};

let Chameleon = ()=>{
    document.body.style.backgroundColor = randomColour();
}
let chameleonIntervalId;

document.querySelector("#start").addEventListener("click", function () {
  console.log("Started!");
  chameleonIntervalId = setInterval(Chameleon, 1000)
})

document.querySelector("#stop").addEventListener("click", function () {
  console.log("Stopped!");
  clearInterval(chameleonIntervalId);
});
