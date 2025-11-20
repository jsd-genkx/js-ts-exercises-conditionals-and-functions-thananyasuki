// TODO-05: Convert this if to switch/case (You can add more options.)
// TODO BONUS: Use object lookup

const fruitInput = "BANANA";
const fruit = fruitInput.trim().toLowerCase();


if (fruit === "apple") {
	console.log("An apple a day keeps the doctor away.");
} else if (fruit === "banana") {
	console.log("Banana is good for potassium.");
} else if (fruit === "orange") {
	console.log("Oranges are full of vitamin C.");
} else {
	console.log("Unknown fruit.");
}




switch (fruit) {
  case "apple":
    console.log("An apple a day keeps the doctor away.");
    break;

  case "banana":
    console.log("Banana is good for potassium.");
    break;

  case "orange":
    console.log("Oranges are full of vitamin C.");
    break;

  default:
    console.log("Unknown fruit.");
}





const fruitMessages: Record<string, string> = {
  apple: "An apple a day keeps the doctor away.",
  banana: "Banana is good for potassium.",
  orange: "Oranges are full of vitamin C.",
};

console.log(fruitMessages[fruit] ?? "Unknown fruit.");