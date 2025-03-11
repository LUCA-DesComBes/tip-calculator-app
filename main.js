const percentDiv = document.querySelectorAll(".percent-div");
const montantInput = document.getElementById("montant");
const peopleInput = document.getElementById("people");
const tipAmount = document.getElementById("tip-amount");
const resetBtn = document.getElementById("reset-btn");
const totalAmount = document.getElementById("total");
const btnCustom = document.getElementById("custom");

function tip(price, percent, people) {
	let result = (price * (percent / 100)) / people;
	return Math.floor(result * 100) / 100;
}

function total(price, percent, people) {
	let results = price / people + (price * (percent / 100)) / people;
	return Math.ceil(results * 100) / 100;
}

function resetActiveClass() {
	for (const element of percentDiv) {
		element.classList.remove("active");
	}
}

function updateResults(price, tip, numberPeople) {
	// logique pour calculer et modifier le contenu html
}
montantInput.addEventListener("input", ()=> {
	
})
for (const element of percentDiv) {
	element.addEventListener("click", () => {
		if (
			montantInput.value === "" ||
			peopleInput.value === "" ||
			parseFloat(peopleInput.value) === 0
		) {
			tipAmount.textContent = "$0";
			totalAmount.textContent = "$0";
			return;
		}

		if (element.textContent === "5%") {
			tipAmount.textContent =
				"$" + tip(montantInput.value, 5, peopleInput.value);
			totalAmount.textContent =
				"$" + total(montantInput.value, 5, peopleInput.value);
		} else if (element.textContent === "10%") {
			tipAmount.textContent =
				"$" + tip(montantInput.value, 10, peopleInput.value);
			totalAmount.textContent =
				"$" + total(montantInput.value, 10, peopleInput.value);
		} else if (element.textContent === "15%") {
			tipAmount.textContent =
				"$" + tip(montantInput.value, 15, peopleInput.value);
			totalAmount.textContent =
				"$" + total(montantInput.value, 15, peopleInput.value);
		} else if (element.textContent === "25%") {
			tipAmount.textContent =
				"$" + tip(montantInput.value, 25, peopleInput.value);
			totalAmount.textContent =
				"$" + total(montantInput.value, 25, peopleInput.value);
		} else if (element.textContent === "50%") {
			tipAmount.textContent =
				"$" + tip(montantInput.value, 50, peopleInput.value);
			totalAmount.textContent =
				"$" + total(montantInput.value, 50, peopleInput.value);
		}
		resetActiveClass();
		element.classList.add("active");
	});
}

btnCustom.addEventListener("input", () => {
	if (
		(montantInput.value == "" && peopleInput.value == "") ||
		montantInput.value == "" ||
		peopleInput.value == ""
	) {
		tipAmount.textContent = "$0";
		totalAmount.textContent = "$0";
	} else if (btnCustom.value) {
		tipAmount.textContent =
			"$" + tip(montantInput.value, btnCustom.value, peopleInput.value);
		totalAmount.textContent =
			"$" + total(montantInput.value, btnCustom.value, peopleInput.value);
	}
	for (const element of percentDiv) {
		element.classList.remove("active");
	}
});

function resetAmount() {
	for (const element of percentDiv) {
		element.classList.remove("active");
	}
	tipAmount.textContent = "$0";
	totalAmount.textContent = "$0";
	montantInput.value = "";
	peopleInput.value = "";
	btnCustom.value = "";
}

resetBtn.addEventListener("click", resetAmount);
