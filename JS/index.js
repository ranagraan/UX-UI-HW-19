    


console.log("your index.js file is loaded correctly");


var dateControl = document.querySelector('input[type="date"]');
dateControl.value = Consulation-Start;
console.log(dateControl.value); // prints "2017-06-01"
console.log(dateControl.valueAsNumber); // prints 1496275200000, a JavaScript timestamp (ms)