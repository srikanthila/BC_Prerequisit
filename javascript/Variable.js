/* Variables and Datatypes example */

// Integer
var a= 10; 
console.log("a value :" +a); //Printing a value
console.log("Type of a value:" + typeof(a) ); //Printing type of a value

//String
var b = "Srikanth";
console.log("b value:" +b)
console.log("Type of " +typeof(b));

//Boolen
var bool = true;
console.log("Bool value:"+bool);
console.log("Type of Bool:"+typeof(bool));

//Array
var arr = [1,2,3,4,5];
console.log("arr value:"+arr);
console.log("Type of arr:"+typeof(arr));
console.log("length of arr:"+arr.length);

//Object
var obj = {"id":101, "Name":"Srikanth", "Dept":"BlockChain"};
console.log("Obj value:"+JSON.stringify(obj));
console.log("Type of obj:"+typeof(obj));
console.log("ID value:"+obj.id);
console.log("Name of obj"+obj.Name);

//JSON Parse
var obj1 = '{"name':"Srikanth", "age":32, "City":"Hyd"}';
console.log(obj1);
console.log(typeof(obj1));
obj1 = JSON.parse(obj1);
console.log(obj1.Name);
console.log(obj1.age);

