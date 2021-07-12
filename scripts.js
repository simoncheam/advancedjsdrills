
/// exercise #1

// setName();
// function setName(){  //function is hoisted

//     //name = 'Simon Cheam';
//     var name = 'Simon Cheam';
//     console.log(name);
// }

/// exercise #2
// console.log('some text1');
// let avg = findAvg(2,2);
// console.log('some text2', avg);

// function findAvg(a,b) {

//     console.log('some text3');

//     var answer = (a + b) /2;
//     return answer;
// }


/// exercise #3

let fruits = ['apple', 'mango', 'banana'];
//let favFruit;

function printFruits(){
    let favFruit = fruits[1];
    console.log(fruits[0]);
    
    function printFavFruit(){
        let leastFav = fruits[2]; //Create a new variable named leastFav using the let keyword, declare it in the scope of the printFavFruit function.

        console.log(favFruit);
    }
    printFavFruit();
    
    //console.log(leastFav); //Log leastFav to the console after the printFavFruit function is declared. 
    
    //Save and refresh the browser. leastFav log should throw an error because the parent function does not have access to variables declared within the nested function.
}


printFruits();

//Create a new function and name the function whatever you would like, make sure to create this using the function keyword, have this function console.log “Hello, “ and then your name. Call this function BEFORE the function body. Example:

printHello(); //*You’ll notice the function runs no problem, because the function is hoisted*

function printHello(){
    console.log("Hello, Simon");
}

let printTest = function(){
    alert('testing last function');
}
printTest(); //adjusted so it works (need to declare function before calling function)