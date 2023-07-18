console.log(`Good morning fren.`)

const findNextSquare = (number) => {
    let value = Math.sqrt(number)
   
    if (value % 1) { 
        console.log(value, -1)
        return -1
    }
    
    else {
        value = ((value + 1) ** 2)  
        console.log(value);
        return value;
    }
  
}


findNextSquare(1)
findNextSquare(2)
findNextSquare(3)
findNextSquare(4)
findNextSquare(5)
findNextSquare(6)
findNextSquare(9)
findNextSquare(15)
findNextSquare(16)
findNextSquare(25)
findNextSquare(26)
findNextSquare(36)
findNextSquare(37)