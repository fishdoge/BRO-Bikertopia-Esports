//更改型別
var num=Number(document.getElementById('num').innerHTML)
var btnReduce=document.getElementById('btnReduce')
var btnAdd=document.getElementById('btnAdd')
var btnMin=document.getElementById('btnMin')
var btnMax=document.getElementById('btnMax')

//nav動效
var listBtn=document.getElementById('list-btn')
var navActive=document.getElementsByClassName('nav-active')
var navActiveShadow=document.getElementsByClassName('nav-active-shadow')
listBtn.addEventListener('click',()=>{
    navActive[0].style.display="inline-block"
})
navActiveShadow[0].addEventListener('click',()=>{
    navActive[0].style.display="none"
})
window.onresize=()=>{
    navActive[0].style.display="none"
}

//btn數量
function getNum(){
    document.getElementById('num').innerHTML=num
}

function getTotalNum(){
    document.getElementById('totalNum').innerHTML=num*1
}

btnReduce.addEventListener('click',()=>{
    if(num>1 && num<51){
        num--
        getNum()
        getTotalNum()
    }
})

btnAdd.addEventListener('click',()=>{
    if(num<50){
        num++
        getNum()
        getTotalNum()
    }
})

btnMin.addEventListener('click',()=>{
    num=1
    getNum()
    getTotalNum()
})

btnMax.addEventListener('click',()=>{
    num=50
    getNum()
    getTotalNum()
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