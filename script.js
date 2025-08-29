// PART 1: Variable + Conditional
let age = 18;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// PART 2: Functions
function greet() {
  return "Welcome!";
}
function add(a, b) {
  return a + b;
}
console.log(greet());
console.log(add(2, 3));

// PART 3: Loops
for (let i = 1; i <= 3; i++) {
  console.log("Number " + i);
}

let count = 0;
while (count < 2) {
  console.log("Count: " + count);
  count++;
}

// PART 4: DOM Interactions
document.getElementById("btn").onclick = function () {
  document.getElementById("text").textContent = "Button Clicked!";
};

let fruits = ["Apple", "Banana", "Mango"];
let list = document.getElementById("list");
for (let fruit of fruits) {
  let li = document.createElement("li");
  li.textContent = fruit;
  list.appendChild(li);
}
