const categoriesList = document.querySelector("#categories");
console.log(`Number of categories: ${categoriesList.children.length}`);

const elements = categoriesList.children;
for (let element of elements) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
}
