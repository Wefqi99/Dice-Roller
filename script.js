const names = []
const rolls= []

function roll() {
    const img = document.getElementById("img");
    let randomNumberGen = Math.floor(Math.random() * 6)+1;
    img.setAttribute("src" , `${randomNumberGen}.png`);
    console.log(randomNumberGen)
}

function animation() {
    setTimeout(roll, 500);
    const img = document.getElementById("img");
    img.setAttribute("src","rollingdice.gif");
    const nam = getElementById("name");
    console.log(nam);

}

function alertFunction() {
    alert("Hello all, \nThis is a simple dice rolling web application designed to help decide turns for the popular game monopoly. When loading the website the dice will automatically roll and when you hit the roll button, it will roll again.");
  }


var input = document.getElementById("rollBtn");


input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("rollBtn").click();
  }
});