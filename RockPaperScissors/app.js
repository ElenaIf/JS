const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const userChoiceDisplay = document.getElementById("userChoiceDisplay");
const buttonsDisplay = document.getElementById("buttons");
const resultDisplay = document.getElementById("resultDisplay");

const choices = ["rock", "paper", "scissors"];

const checkResults = (computerRandomChoice, userChoice) => {
	switch (computerRandomChoice + userChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			resultDisplay.textContent = "YOU LOST!!!";
			break;
		case "scissorsrock":
		case "rockpaper":
		case "paperscissors":
			resultDisplay.textContent = "YOU WON!!!";
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			resultDisplay.textContent = "IT IS A TIE";
			break;
		default:
			resultDisplay.textContent = "Something went wrong";
			break;
	}
};

const computerChoice = (userChoice) => {
	const randomNumber = Math.floor(Math.random() * choices.length);
	const computerRandomChoice = choices[randomNumber];
	computerChoiceDisplay.textContent = computerRandomChoice;
	checkResults(computerRandomChoice, userChoice);
};

const handleClick = (e) => {
	const userChoice = e.target.id;
	userChoiceDisplay.textContent = userChoice;
	computerChoice(userChoice);
};

const createButtons = (choice) => {
	const button = document.createElement("button");
	button.textContent = choice;
	button.id = choice;
	button.addEventListener("click", handleClick);
	buttonsDisplay.appendChild(button);
};

choices.forEach((choice) => createButtons(choice));
