let numbers = [1, 2, 3, 4, 5];

let numberList = document.createElement("ol");

for (let i = 0; i < numbers.length; i++) {
    var numberItem = document.createElement("li");
    numberItem.innerHTML = numbers[i];
    numberList.appendChild(numberItem);
}

document.body.appendChild(numberList);

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

let sumElement = document.createElement("p");
sumElement.innerHTML = "The sum of all numbers is: " + sum;

document.body.appendChild(sumElement);

