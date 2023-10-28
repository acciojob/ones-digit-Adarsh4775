function onesDigit(n) {
  // your code here
	if(n > 0)
	{
		let onesDigit = n % 10;
		return onesDigit;
	}
}

// Do not change the code below
const n = prompt("Enter Number:");
alert(onesDigit(n));


