console.log(`gm fren`)


/*
Roman Numerals building blocks

1 = I
5 = V
10 = X
50 = L
100 = C
500 = D
1000 = M

*/


function toRoman (num) {
    var blocks = {
        M: 1000,
        D: 500, 
        C: 100, 
        L: 50,
        X: 10,
        V: 5, 
        I: 1
    };

    var str = '';
    
    if (num > 1000 || num < 1) {
        console.log(`Number outside scope, do not pass go`);
        return
    }
    
    else  {
        for (var i of Object.keys(blocks)) {
            var x = Math.floor(num /blocks[i]);
            num -= x * blocks[i];
            str += i.repeat(x);
        } 
        console.log(str)
        return str;
      
    }
    
}



toRoman(0)
toRoman(1001)

toRoman(5) // 'V'
toRoman(267) // 'CCLXVII'
