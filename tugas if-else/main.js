/*
1.  jika a = 50, looping a
    lainnya print boolean

2.  jika b + a bukan 32, looping b
    lainnya print boolean

3.  jika c + a = 28, looping c
    lainnya print boolean

4.  jika x = 35, looping x
    lainnya print boolean

5.  jika x + y bukan 35, looping y
    lainnya print boolean

6.  jika c + y + a bukan 25, looping a
    lainnya print boolean
*/

let a = 7;
let b = 25;
let c = 8;
let x = 5;
let y = 31;

// 1
if (a == 50){
    for(let i = a; i>=0; i--){
        console.log(i);
    }
}else{
    console.log(a == 50)
}

// 2
if (b + a != 32){
    for(let i = b; i>=0; i--){
        console.log(i);
    }
}else{
    console.log(b + a != 32)
}

// 3
if (c + a == 28){
    for(let i = c; i>=0; i--){
        console.log(i);
    }
}else{
    console.log(c + a == 28)
}

// 4
if (x == 35){
    for(let i = x; i>=0; i--){
        console.log(i);
    }
}else{
    console.log(x == 35)
}

// 5
if (x + y != 35){
    for(let i=y; i>=0; i--){
        console.log(i)
    }
}else{
    console.log(x + y != 35)
}

// 6
if (x + y + a != 25){
    for(let i = a; i>=0; i--){
        console.log(i)
    }
}else{
    console.log(x + y + a != 25)
}