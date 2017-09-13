var classes = {
  "items":[
   {
     "name":"Mathematik I/II",
     "ects":8,
     "mark":4
   },
   {
     "name":"Grundlagen der Informatik",
     "ects":3,
     "mark":4
   },
   {
     "name":"Allgemeine Chemie",
     "ects":6,
     "mark":4
   },
   {
     "name":"Organische Chemie I/II",
     "ects":9,
     "mark":4
   },
   {
     "name":"Grundlagen der Biologie IA",
     "ects":8,
     "mark":4
   },
   {
     "name":"Grundlagen der Biologie IB",
     "ects":8,
     "mark":4
   },
   {
     "name":"Physik",
     "ects":5,
     "mark":4
   },
   {
     "name":"Statistik I",
     "ects":3,
     "mark":4
   }
 ]
};

Object.keys(classes.items).forEach(function(key) {
    var element = document.createElement('div');
    element.innerHTML = (classes.items[key].name + " (" + classes.items[key].ects + ") <input type=\"number\" id=\""+ key +"\"><br>");
    document.getElementById('main').appendChild(element);
});

function calc(){
  points = 0;
  totalECTS = 0;
  
  Object.keys(classes.items).forEach(function(key) {
    classes.items[key].mark = document.getElementById(key).value;
    console.log(classes.items[key].name + " " + classes.items[key].mark);

    points = points+(classes.items[key].mark * classes.items[key].ects);
    totalECTS = (totalECTS + classes.items[key].ects);
    console.log("P"+points);
    console.log("E"+totalECTS);
  });
  document.getElementById('anchor').innerHTML = (points/totalECTS);
}
