class BottegaDiner {
	constructor() {
		this.price = 0;
	}
	giveFullMenu() {
		alert("Here is our full menu:\n Hamburger or Enchiladas,\n Fries, onion rings, or yuka");
	}
	askMainMenu() {
		let response = prompt("Would you like Hamburger: $4 or Enchiladas: $5 ?", "Your response");
		if (response == "Hamburger") {
			this.price += 4;
			alert(`Great choice, the Hamburgers are the best your current total is \$${this.price}`);
		} else if (response == "Enchiladas") {
			this.price += 5;
			alert(`Great choice, the Enchiladas are the best your current total is \$${this.price}`);
		}
	}
	askSideMenu() {
		let response = prompt("Would you like Fries: $1, Onion rings: $2, or Yuka: $3 ?", "Your response");
		if (response == "Fries") {
			this.price += 1;
			alert(`Great choice, the Fries are the best your current total is \$${this.price}`);
		} else if  (response == "Onion rings") {
			this.price += 2;
			alert(`Great choice, the Onion rings are the best your current total is \$${this.price}`);
		} else if  (response == "Yuka") {
			this.price += 3;
			alert(`Great choice, the Yuka are the best your current total is \$${this.price}`);
		}
	}
	getPrice() {
		return this.price;
	}
}

function openStore() {
	let customer = new BottegaDiner();
	customer.giveFullMenu();
	customer.askMainMenu();
	customer.askSideMenu();
	customer.askSideMenu();

  if (customer.getPrice() != null) {
    document.getElementById("receipt").innerHTML =
    `Hello! Your total is \$${customer.getPrice()}`;
  }
}