import { ingredientLayout, Ingredient } from "./makeline";

// Constants
let ingredientUnitWidth = 50;
let stationMargin = 5;

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function underscoreCase(txt: string): string {
  // remove non-alphanumeric characters
  txt = txt.replace(/[^a-zA-Z0-9 ]/g, "");
  const words = txt.split(" ");
  return words.join("_").toLowerCase();
}

function putMakeline() {
  const makelineDiv = $("#makeline");

  const makelineContainer = document.createElement("div");
  makelineContainer.classList.add(
    "flex",
    "flex-row",
    "overflow-x-scroll",
    "overflow-y-hidden",
    "mx-6",
    "my-4"
  );
  makelineContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    makelineContainer.scrollLeft += event.deltaY;
  });

  for (let column = 0; column < ingredientLayout.length; column++) {
    let stationDiv = document.createElement("div");
    stationDiv.classList.add("grid");
    stationDiv.style.minWidth = `${
      ingredientLayout[column].width * ingredientUnitWidth
    }px`;
    stationDiv.textContent = ingredientLayout[column].station;

    for (let row of ["row1", "row2", "row3"] as const) {
      let rowDiv = document.createElement("div");
      rowDiv.classList.add("flex", "flex-row", "h-16");

      for (let ingredientData of ingredientLayout[column][row]) {
        // Ingredient div
        let [ingredient, width] = ingredientData as [Ingredient, number];
        let ingredientDiv = document.createElement("div");
        ingredientDiv.classList.add("ingredient");
        ingredientDiv.textContent = ingredient;
        // ingredientDiv.style.backgroundColor = "#bbb";
        ingredientDiv.style.minWidth = `${width * ingredientUnitWidth}px`;

        // Ingredient image
        let imgDiv = document.createElement("img");
        let nameUnderScore = underscoreCase(ingredient);
        ingredientDiv.style.backgroundImage = `url('assets/topping/${nameUnderScore}.webp')`;
        ingredientDiv.style.backgroundSize = "cover";
        ingredientDiv.style.backgroundPosition = "center";
        ingredientDiv.style.backgroundRepeat = "no-repeat";

        console.log(imgDiv.src);

        imgDiv.style.height = "100%";

        // Add to html
        // ingredientDiv.appendChild(imgDiv);
        rowDiv.appendChild(ingredientDiv);
      }

      stationDiv.appendChild(rowDiv);
    }

    makelineContainer.appendChild(stationDiv);
  }

  // makelineDiv.appendChild(makelineContainer);
}

export { putMakeline };
