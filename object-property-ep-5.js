const students = [
  {id:21 , name:'rohan'},
  {id:34,name:'soahn'},
  {id:67,name:'hasan'}  
  

];
const array = students.map(x=>x.id)
console.log(array);
const array2 = students.filter(y => y.id>40);
console.log(array2)
