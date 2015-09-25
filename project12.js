var numbers = [];
var sum = 0;
for (var i = 1; i <= 7; i++) {
	for (var j = 1; j <= i; j++) {
		sum += j;
		numbers[i - 1] = sum;
	}
	sum = 0;
}
console.log(numbers);