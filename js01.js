setTimeout (function(){
    confirm("DO YOU LIKE IT!" )
    
}, 20000)

// setInterval (async function (){
//     document.querySelector("#food").classList.toggle("food")
// },300)
var images =[
    
    'image/01.jpg',
    'image/02.jpg',
    'image/03.jpg',
   
    'image/05.jpg',
    
];
var len = images.length;

function demo(){
    var random = Math.floor(Math.random()*len);
    document.getElementById("bg").style.backgroundImage="url("+images[random]+")";
}
demo();

setInterval(demo,2000);