/*

1. Array : [ 2, 5, 10, saya, 29, 99, 38 ]
    Array : [ 100, 3, 66, 20, 'abjad' ]
    jika panjang array a + array b < 50,
    looping array with the condition,
    print the array if the index modulo = 0
    print the array of sum array a + array b
    print the array of string in array a + array b
    else print boolean



    2. Array : [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ]
    Array : [ 200, 300, 21, 'dari', indonesia ]
    jika array b + array b bukan 32,
    looping array with the condition
    print the array of string
    prtin the array of modulo = 1
    print the array of sum array a + array b
    else print boolean

    3. Array: [ 29, 12, 30, 'ini', 'saya', 85 ]
    Array: [ 'cyber', 'security', 20, 15, 21]
    jika ( panjang array ) + a = 28,
    looping array with the condition
    print the array of string
    print the array of sum array a + array b
    print the array of modulo = 0
    else print boolean

    4. Array: [ 20, 12, 43, 54, 24 ]
    Array: [ 'saya', 'adalah', 'seorang', 'pemusik', 0, 201]
    jika panjang array + 1 != 35,
    looping array with the condition
    print the array if the index modulo = 1
    print the array of string
    else print boolean

    5. Array: [ 20, 'empat', 'limat', 8, 29, 30 ]
    Array: [ 19, 'tujuh', 'sepuluh', 11, 23, 40 ]
    jika x + ( panjang array ) bukan 35,
    looping array with the condition
    print the array of sum array a + array b
    print the array of modulo = 0
    else print boolean

    6. Array: [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]
    Array: [ 9, 7, 24, 'data', 'lima', 25]
    jika array a + array b + u bukan 25,
    looping array with the condition 
    print the array of sum array a + array b
    print the array if the index modulo = 1
    else print boolean

*/


class MyArray{
    constructor(arrayA, arrayB){
        this.arrayA = arrayA;
        this.arrayB = arrayB;
    }

    // 1. Array : [ 2, 5, 10, saya, 29, 99, 38 ]
    // Array : [ 100, 3, 66, 20, 'abjad' ]
    // jika panjang array a + array b < 50,
    // looping array with the condition,
    // print the array if the index modulo = 0
    // print the array of sum array a + array b
    // print the array of string in array a + array b
    // else print boolean

    fun1(){
        if(this.arrayA.length + this.arrayB.length < 50){
            let arrayConcat = this.arrayA.concat(this.arrayB);
            let total = 0;
            let stringConcat = [];
            for(let i = 0; i < arrayConcat.length; i++){
                if(arrayConcat[i] % i == 0 ){
                    console.log(arrayConcat[i])
                }

                if(typeof arrayConcat[i] == 'number'){
                    total += arrayConcat[i];
                }

                if(typeof arrayConcat[i] == 'string'){
                    // console.log(arrayConcat[i]);
                    stringConcat.push(arrayConcat[i])
                }
            }
            console.log('sum: ' + total);
            console.log('string array: ' + stringConcat);
        }else{
            console.log(false);
        }
    }

    // 2. Array : [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ]
    // Array : [ 200, 300, 21, 'dari', indonesia ]
    // jika array b + array b bukan 32,
    // looping array with the condition
    // print the array of string
    // prtin the array of modulo = 1
    // print the array of sum array a + array b
    // else print boolean

    fun2(){
        if(this.arrayB.length + this.arrayB.length != 32){
            let arrayConcat = this.arrayA.concat(this.arrayB);
            let total = 0;
            let stringConcat = [];
            for(let i = 0; i < arrayConcat.length; i++){
                if(arrayConcat[i] % i == 1 ){
                    console.log(arrayConcat[i])
                }

                if(typeof arrayConcat[i] == 'number'){
                    total += arrayConcat[i];
                }

                if(typeof arrayConcat[i] == 'string'){
                    // console.log(arrayConcat[i]);
                    stringConcat.push(arrayConcat[i])
                }
            }
            console.log('sum: ' + total);
            console.log('string array: ' + stringConcat);
        }else{
            console.log(false);
        }
    }

    // 3. Array: [ 29, 12, 30, 'ini', 'saya', 85 ]
    // Array: [ 'cyber', 'security', 20, 15, 21]
    // jika ( panjang array ) + a = 28,
    // looping array with the condition
    // print the array of string
    // print the array of sum array a + array b
    // print the array of modulo = 0
    // else print boolean

    fun3(){
        let a = 17;
        if((this.arrayA.length + this.arrayB.length) + a == 28){
            let arrayConcat = this.arrayA.concat(this.arrayB);
            let total = 0;
            let stringConcat = [];
            for(let i = 0; i < arrayConcat.length; i++){
                if(arrayConcat[i] % i == 0 ){
                    console.log(arrayConcat[i])
                }

                if(typeof arrayConcat[i] == 'number'){
                    total += arrayConcat[i];
                }

                if(typeof arrayConcat[i] == 'string'){
                    // console.log(arrayConcat[i]);
                    stringConcat.push(arrayConcat[i])
                }
            }
            console.log('sum: ' + total);
            console.log('string array: ' + stringConcat);
        }else{
            console.log(false);
        }
    }

    // 4. Array: [ 20, 12, 43, 54, 24 ]
    //     Array: [ 'saya', 'adalah', 'seorang', 'pemusik', 0, 201]
    //     jika panjang array + 1 != 35,
    //     looping array with the condition
    //     print the array if the index modulo = 1
    //     print the array of string
    //     else print boolean

    fun4(){
        let a = 17;
        if((this.arrayA.length + this.arrayB.length) + 1 != 35){
            let arrayConcat = this.arrayA.concat(this.arrayB);
            // let total = 0;
            let stringConcat = [];
            for(let i = 0; i < arrayConcat.length; i++){
                if(arrayConcat[i] % i == 1 ){
                    console.log(arrayConcat[i])
                }

                if(typeof arrayConcat[i] == 'string'){
                    // console.log(arrayConcat[i]);
                    stringConcat.push(arrayConcat[i])
                }
            }
            // console.log('sum: ' + total);
            console.log('string array: ' + stringConcat);
        }else{
            console.log(false);
        }
    }

    // 5. Array: [ 20, 'empat', 'limat', 8, 29, 30 ]
    // Array: [ 19, 'tujuh', 'sepuluh', 11, 23, 40 ]
    // jika x + ( panjang array ) bukan 35,
    // looping array with the condition
    // print the array of sum array a + array b
    // print the array of modulo = 0
    // else print boolean

    fun5(){
        let x = 17;
        if((this.arrayA.length + this.arrayB.length) + x != 35){
            let arrayConcat = this.arrayA.concat(this.arrayB);
            let total = 0;
            for(let i = 0; i < arrayConcat.length; i++){
                if(arrayConcat[i] % i == 0 ){
                    console.log(arrayConcat[i])
                }

                if(typeof arrayConcat[i] == 'number'){
                    total += arrayConcat[i];
                }
            }
            console.log('sum: ' + total);
        }else{
            console.log(false);
        }
    }

    // 6. Array: [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]
    // Array: [ 9, 7, 24, 'data', 'lima', 25]
    // jika array a + array b + u bukan 25,
    // looping array with the condition 
    // print the array of sum array a + array b
    // print the array if the index modulo = 1
    // else print boolean

    fun6(){
        let u = 17;
        if((this.arrayA.length + this.arrayB.length) + u != 28){
            let arrayConcat = this.arrayA.concat(this.arrayB);
            let total = 0;
            for(let i = 0; i < arrayConcat.length; i++){
                if(arrayConcat[i] % i == 1 ){
                    console.log(arrayConcat[i])
                }

                if(typeof arrayConcat[i] == 'number'){
                    total += arrayConcat[i];
                }
            }
            console.log('sum: ' + total);
        }else{
            console.log(false);
        }
    }
}

// 1. Array : [ 2, 5, 10, saya, 29, 99, 38 ]
//     Array : [ 100, 3, 66, 20, 'abjad' ]
//     jika panjang array a + array b < 50,
//     looping array with the condition,
//     print the array if the index modulo = 0
//     print the array of sum array a + array b
//     print the array of string in array a + array b
//     else print boolean

let arrayA = [ 2, 5, 10, 'saya', 29, 99, 38 ];
let arrayB = [ 100, 3, 66, 20, 'abjad' ];

myArray = new MyArray(arrayA, arrayB);
myArray.fun1();




// 2. Array : [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ]
//     Array : [ 200, 300, 21, 'dari', indonesia ]
//     jika array b + array b bukan 32,
//     looping array with the condition
//     print the array of string
//     prtin the array of modulo = 1
//     print the array of sum array a + array b
//     else print boolean

// let arrayA = [ 29, 12, 30, 'ini', 'saya', 85 ];
// let arrayB = [ 200, 300, 21, 'dari', 'indonesia' ];

// myArray = new MyArray(arrayA, arrayB);
// myArray.fun2();




// 3. Array: [ 29, 12, 30, 'ini', 'saya', 85 ]
//     Array: [ 'cyber', 'security', 20, 15, 21]
//     jika ( panjang array ) + a = 28,
//     looping array with the condition
//     print the array of string
//     print the array of sum array a + array b
//     print the array of modulo = 0
//     else print boolean

// let arrayA = [ 29, 12, 30, 'ini', 'saya', 85 ];
// let arrayB = [ 'cyber', 'security', 20, 15, 21];

// myArray = new MyArray(arrayA, arrayB);
// myArray.fun3();



// 4. Array: [ 20, 12, 43, 54, 24 ]
//     Array: [ 'saya', 'adalah', 'seorang', 'pemusik', 0, 201]
//     jika panjang array + 1 != 35,
//     looping array with the condition
//     print the array if the index modulo = 1
//     print the array of string
//     else print boolean

// let arrayA = [ 20, 12, 43, 54, 24 ];
// let arrayB = [ 'saya', 'adalah', 'seorang', 'pemusik', 0, 201];

// myArray = new MyArray(arrayA, arrayB);
// myArray.fun4();



// 5. Array: [ 20, 'empat', 'limat', 8, 29, 30 ]
// Array: [ 19, 'tujuh', 'sepuluh', 11, 23, 40 ]
// jika x + ( panjang array ) bukan 35,
// looping array with the condition
// print the array of sum array a + array b
// print the array of modulo = 0
// else print boolean

// let arrayA = [ 20, 'empat', 'limat', 8, 29, 30 ];
// let arrayB = [ 19, 'tujuh', 'sepuluh', 11, 23, 40 ];

// myArray = new MyArray(arrayA, arrayB);
// myArray.fun5();




 // 6. Array: [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]
// Array: [ 9, 7, 24, 'data', 'lima', 25]
// jika array a + array b + u bukan 25,
// looping array with the condition 
// print the array of sum array a + array b
// print the array if the index modulo = 1
// else print boolean

// let arrayA = [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ];
// let arrayB = [ 9, 7, 24, 'data', 'lima', 25];

// myArray = new MyArray(arrayA, arrayB);
// myArray.fun6();
