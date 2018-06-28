"use strict";



/*Import Module*/
import {name,doAdd} from './tpl.module.es6'

/*
 import MyClassDefault,  {name,doAdd} from './tpl.module.es6';
 import MyClassDefault, * as my_lib from './tpl.module.es6';
 */
console.log(name,doAdd(1,3)); //Uday 4

/*Import all method inside alias var */
import * as lib from './tpl.module.es6'
console.log(lib.name,lib.doAdd(1,3));



/*Importing default export no need to wrap inside {} */
import MyClass from './tpl.module.es6';
const objCls=new MyClass();
console.log(objCls.hello())






/*
 Let and Const
 Arrow functions
 Default parameters
 for of loop
 Spread attributes
 Maps
 Sets
 Static methods
 Getters and Setters
 */

/*Single export*/
