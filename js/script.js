let mobilecross=document.getElementById("mobilecross");
// console.log("mobilecross")
let mobilemenu=document.getElementById("mobilemenu");
let menuBar=document.getElementById("menuBar");
console.log("menuBar");

mobilecross.addEventListener('click', () =>{
    menuBar.style.top="-50vh";
})
mobilemenu.addEventListener('click', () =>{
    menuBar.style.top="0vh";
})