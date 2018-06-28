"use strict";
/*Single export*/
export const name = 'Uday';

export function doAdd(a,b){
    return a+b;
}





class MyClass{

    hello(){
        return 'Hello world';
    }
    set whichCls(whichCls){
        this._whichClsPrivate=whichCls;
    }
    get whichCls(){
        return this._whichClsPrivate;
    }
}


export default MyClass;

class childClass extends MyClass{

    constructor (msg) {
        /*If we are extending class we have to use super on constructor*/
        super()
        this.msg = msg;

    }
    static getHello(){
        return 'Hello Uday';
    }
    getMsg(){
        return 'Parent:'+this.hello()+' and you set '+this.msg;
    }
}
function dummyFunc(){
    return 'dummy';
}
/*Export Multiple*/
export { childClass, dummyFunc };
/*
 export { MyClass as default, childClass, dummyFunc };
 */