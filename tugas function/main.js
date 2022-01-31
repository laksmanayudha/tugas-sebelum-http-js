/*

1. Array : [ 2, 5, 10, 'ini dia', 'data', 100 , 38 ]
jika panjang array kurang dari 50, looping array
else print boolean

2. Array : [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ]
jika b + ( panjang array ) bukan 32, looping array
else print boolean

3. Array: [ 29, 12, 30, 'ini', 'saya', 85 ]
jika ( panjang array ) + a = 28, looping array
else print boolean

4. Array: [ 20, 12, 43, 54, 24 ]
jika panjang array + 1 bukan 35, looping array
else print boolean

5. Array: [ 20, 'empat', 'limat', 8, 29, 30 ]
jika x + ( panjang array ) bukan 35, looping array
else print boolean

6.  Array: [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]
jika c + ( panjang array ) + a bukan 25, looping array
else print boolean

*/

function fun(ar, condition){
    if(condition){
        for(let item of ar){
            console.log(item);
        }
    }else{
        console.log(condition)
    }
}

// 1
let arrayOne = [ 2, 5, 10, 'ini dia', 'data', 100 , 38 ];
fun(arrayOne, arrayOne.length < 50)

// 2
let arrayTwo = [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ];
let b = 6;
fun(arrayTwo, b  + arrayTwo.length != 32)

// 3
let arrayThree = [ 29, 12, 30, 'ini', 'saya', 85 ];
let a = 22;
fun(arrayThree, arrayThree.length + a == 28)


// 4
let arrayFour = [ 20, 12, 43, 54, 24 ];
fun(arrayFour, arrayFour.length + 1 != 35)

// 5
let arrayFive = [ 20, 12, 43, 54, 24 ];
let x = 7;
fun(arrayFive, x + arrayFive.length != 35)

6
let arraySix = [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]
let c = 5;
let a = 11;
fun(arraySix, c + arraySix.length + a != 25)

