console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number
/*
Name - Gurleen Singh
Student Number - 200522622
*/ 

// Step 2: Create a block scoped, immutable variable that stores an empty array
const myarray =[];


// Step 3: Add the 3 people's names to the array
myarray.push("Garry", "Gurleen", "Shaun");


// Step 4: Remove the second array item from the array
myarray.splice(1,1);


// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable
let newarray = myarray.map(function(item)
{
    return item.toUpperCase();
    //console.log(newarray);
})

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";
let lasst = document.getElementById("newwww");
lasst.addEventListener("click", function()
{
    alert("Hello from Boo the World's Cutest Dog!");
});