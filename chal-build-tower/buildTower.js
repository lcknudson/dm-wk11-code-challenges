// Write a function that takes in a number. It should return a “tower” of *. The tower will be an array of strings.

// The number passed in tells you how many floors the tower should have.

// The first floor should have 1 block, the 2nd should have 3 blocks, the 3rd should have 5 blocks, and so on.

// Each block is represented by a *.

// For example, a tower of 3 floors looks like this (note the spacing):

// For example, a tower of 3 floors looks like this (note the spacing):

// [
//     '  *  ',
//     ' *** ',
//     '*****'
// ]
// and a tower of 6 floors looks like this:

// [
//     '     *     ',
//     '    ***    ',
//     '   *****   ',
//     '  *******  ',
//     ' ********* ',
//     '***********'
// ]



function tower(num) {
    let towerArray = [];
    let blockCount = 1;
    let spaces = num -1;

    for (let index = 0; index < num; index++) {
        let floor = " ".repeat(spaces) + "*".repeat(blockCount) + " ".repeat(spaces);
        towerArray.push(floor);      
    
        blockCount += 2
        spaces--;
    }
    return towerArray
}


console.log(tower(3))
console.log(tower(6))
console.table(tower(6))



