const myproglang = ['js', 'php', 'c', 'python', 'java'];

//es5
// var top1 = myproglang[0];
// var top2 = myproglang[1];
// var top3 = myproglang[2];

// console.log( "My fav prog lang is " + top1 );

//es6

// let [top1, top2, top3, top4, top5] = myproglang;

// console.log( `My fav prog language is ${top5}` )
// console.log( myproglang.length );

// let [top1, , , , toplast] = myproglang;
// console.log( `My fav prog lang is ${top1} and my 2nd fav is ${toplast}.` );

let top1, top2;
[top1, top2] = myproglang;
console.log( `My fav prog lang is ${top1} and my 2nd fav is ${top2}.` );




