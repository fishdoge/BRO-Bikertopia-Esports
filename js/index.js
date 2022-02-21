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
    console.log(navActive[0].style.width="30vw")
})
navActiveShadow[0].addEventListener('click',()=>{
    navActive[0].style.display="none"
})

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