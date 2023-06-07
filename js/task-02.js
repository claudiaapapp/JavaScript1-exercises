const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let resultList = [];
for (let ingredient of ingredients) {
  let liItem = document.createElement("li");
  liItem.textContent = ingredient;
  liItem.classList.add("item");
  resultList.push(liItem);
}
let list = document.querySelector("#ingredients");
resultList.forEach((item) => list.append(item));
