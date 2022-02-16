//更改型別
var num=Number(document.getElementById('num').innerHTML)
var btnReduce=document.getElementById('btnReduce')
var btnAdd=document.getElementById('btnAdd')
var btnMin=document.getElementById('btnMin')
var btnMax=document.getElementById('btnMax')


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