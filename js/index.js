//更改型別
var num=1;
var btnReduce=document.getElementById('btnReduce');
var btnAdd=document.getElementById('btnAdd');
var btnMin=document.getElementById('btnMin');
var btnMax=document.getElementById('btnMax');

//nav動效
var listBtn=document.getElementById('list-btn');
var navActive=document.getElementsByClassName('nav-active');
var navActiveShadow=document.getElementsByClassName('nav-active-shadow');
listBtn.addEventListener('click',()=>{
    navActive[0].style.display="inline-block";
})
navActiveShadow[0].addEventListener('click',()=>{
    navActive[0].style.display="none";
})
window.onresize=()=>{
    navActive[0].style.display="none";
}

let numbers = 1;

//btn數量
function getNum(){
    document.getElementById('num').innerHTML=num;
}

function getTotalNum(i){
    document.getElementById('totalNum').innerHTML=(i*6)/100;
}

btnReduce.addEventListener('click',()=>{
    if(num>1 && num<=20){
        num--;
        getNum();
        getTotalNum(num);
    }
})

btnAdd.addEventListener('click',()=>{
    if(num<20){
        num++;
      
        getNum();
        getTotalNum(num);
    }
})

btnMin.addEventListener('click',()=>{
    num=1;
    getNum();
    getTotalNum(num);
})

btnMax.addEventListener('click',()=>{
    num=20;
    getNum();
    getTotalNum(num);
})

//展開清單
var coll = document.getElementsByClassName("collapsible");
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}