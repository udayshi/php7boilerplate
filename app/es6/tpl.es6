"use strict";



/*Import Module*/
import {name,doAdd,childClass} from './tpl.module.es6'

/*
 import MyClassDefault,  {name,doAdd} from './tpl.module.es6';
 import MyClassDefault, * as my_lib from './tpl.module.es6';

 import React from 'react';
 const { Component, PropTypes } = React;
 */
let ccObj=new childClass('Passing msg on constructor');
if(false)
    console.log(name,doAdd(1,3),ccObj.getMsg(),childClass.getHello());



/*Import all method inside alias var */
import * as lib from './tpl.module.es6'
if(false)
    console.log(lib.name,lib.doAdd(1,3));



/*Importing default export no need to wrap inside {} */
import MyClass from './tpl.module.es6';
const objCls=new MyClass();
if(false)
    console.log(objCls.hello())


/*******Arrow functions********/
let ar_msg=()=>'Hello without param';
/*Sample of default param*/
let ar_add=(a,b=8)=>a+b;

let ar_multi=()=>{
    return 'this is multiline syntax';
}
if(false)
    console.log('MSG'+ar_msg(),
                '\nDEFAULT FUNCTION PARAM:'+ ar_add(2),
                '\nFUNCTION PARAM:'+ ar_add(2,3),
                '\nMulti:' + ar_multi());
/****************************/

/****Template Literals******/
if(false)
    console.log(`Calling javascript inside ${ar_msg()}`)
/****************************/

/****Spread Operator****/
    /*...nums*/
    let doAddSpread=(...params)=>{
        let total=0;
        params.forEach(v=>total+=v)
        return total
    }
    if(false)
        console.log(doAddSpread(1,2));

    let add_nums=[3,4];
    if(false)
        console.log(doAddSpread(...add_nums));
    let new_nums=[1,2,...add_nums,5,6]
    if(false)
        console.log(new_nums);

/****************************/
/****Destructring****/
let my_struct=[3,4];
let a,b=my_struct;
if(false)
    console.log('Struct',a,b);
/****************************/
/**Generators**/
import 'babel-polyfill';
function* generatorTpl(){
    yield 'A';
    yield 'B';

}
let gptr=generatorTpl();
if(false) {
    console.log('First Call+' + gptr.next().value);
    console.log('Second Call+' + gptr.next().value);
}
/*
for (let value of gptr) {
    console.log(value);
}*/
/******************************/
/* Async/Await or Callback */
const getData = () => new Promise((callback) => {
    setTimeout(() => callback([1,2,3,4]), 500);
});

async function callbackFunction() {
    const result = await getData(); // returns promise
    // waits for promise and uses promise result
    return result ;
}
if(false)
    callbackFunction().then(result => console.log(result));

/***************************/
/**for of loop**/
let arr=[1,2,3,4];
if(false)
    arr.forEach(r=>console.log('For Each:'+r))


if(false){
    for(let val of arr)
        console.log('For IN:'+val);

    for (var chr of "😺😲") {
        console.log(chr);
    }
}


if(false){
    arr={'name':'uday','age':40};
    for(let indx in arr)
        console.log('For IN:'+indx);

    console.log(Object.keys(arr))
}
/******************************/
/***Maps*****/
var myMap = new Map();
/*Can set int,string,object,function */
myMap.set('first_name','uday');
myMap.set('last_name','shiwakoti');
myMap.set('kids',['Anu','Aru'])
if(false)
    console.log(myMap.get('kids'));
/****************************/


