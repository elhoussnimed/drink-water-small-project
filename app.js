const drinkRemaindParagraph = document.querySelector(".totalDrink p");
const drinkRemaind = document.querySelector(".totalDrink span:first-of-type");
const fillRatio = document.querySelector(".totalDrink .fill-ratio");
const glasses = document.querySelectorAll(".glass");

glasses.forEach((glass) => {
  glass.addEventListener("click", () => {
    glass.classList.toggle("clicked");
    const dataGoal = +drinkRemaind.dataset.goal;
    const dataDrink = +glass.dataset.drink;
    changeContentAndHeight(dataDrink, dataGoal);
    hideAndShowReminder(glass);
    changeBgColors(glass, dataDrink);
  });
});

function changeContentAndHeight(dataDrink, dataGoal) {
  // change the height of the fill ratio
  fillRatio.style.cssText = `height:${dataDrink}%`;
  // change the percentage of fill ratio
  fillRatio.innerHTML = `${dataDrink}%`;
  // change the amount of water needed
  drinkRemaind.innerHTML = `${dataGoal - dataGoal * (dataDrink / 100)}L`;
}

function hideAndShowReminder(glass) {
  // hide and show the reminder
  if (glass.classList.contains("full")) {
    drinkRemaindParagraph.classList.add("hide");
  } else {
    drinkRemaindParagraph.classList.remove("hide");
  }
}

function changeBgColors(glass, dataDrink) {
  // if the first glass clicked then we change Bg-color to white all the other glasses
  if (glass.classList.contains("first")) {
    glasses.forEach((glass) => {
      glass.classList.remove("clicked");
    });
  }
  // if the last glass clicked then we change Bg-color to blue all the other glasses
  if (glass.classList.contains("full")) {
    glasses.forEach((glass) => {
      glass.classList.add("clicked");
    });
  }
  // change bg-color to blue for all previous elements and bg-color to white for all next elements
  glasses.forEach((glass) => {
    if (+glass.dataset.drink <= dataDrink) {
      glass.classList.add("clicked");
    } else {
      glass.classList.remove("clicked");
    }
  });
}
