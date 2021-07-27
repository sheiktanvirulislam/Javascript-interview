let bonus = 20;//global
function sum(x,y) {
    let result = x + y;//result is local scope.
    if (result>9) {
        let mood = 'happy'//var hoist the variable
        //let / const don't hoist or change the scope of variable.
         console.log(mood);
    }
    console.log(mood);
    
    return result;
}

const output = sum(4,6);

console.log(output);