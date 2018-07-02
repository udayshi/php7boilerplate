document.getElementsByTagName('button')
document.getElementsByClassName('btn')
document.getElementById('hello')



document.querySelectorAll('li.list-group-item')
document.querySelectorAll('#applet_content')[0].innerHTML='hello world'
document.getElementById('class_test').classList.remove('container')
document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
document.getElementsByTagName("H1")[0].getAttribute("class");


document.getElementById("uniqueID").value;
var strUser = e.options[e.selectedIndex].value;
formObj.leaveCode[i].selected = true;

e.checked for check
e.style.display = "block";


//count
a.length


//total
a.reduce(function(a,b){ return a+b},0)
//avg
a.reduce(function(a,b){ return a+b},0)/a.length
//max
Math.min(...a)
Math.max(...a)

//order asc
arrayOfObjects.sort(function(a,b){
    return a.name.toLowerCase()>b.name.toLowerCase();
});

//order desc
arrayOfObjects.sort(function(a,b){
    return a.name.toLowerCase()< b.name.toLowerCase();
});
//date order
array.sort(function(a,b){
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(b.date) - new Date(a.date);
});


MULTIORDER(a, b) {

    var o1 = a[3].toLowerCase();
    var o2 = b[3].toLowerCase();

    var p1 = a[1].toLowerCase();
    var p2 = b[1].toLowerCase();

    if (o1 < o2) return -1;
    if (o1 > o2) return 1;
    if (p1 < p2) return -1;
    if (p1 > p2) return 1;
    return 0;
}

order()
orderInt()
orderDate()
