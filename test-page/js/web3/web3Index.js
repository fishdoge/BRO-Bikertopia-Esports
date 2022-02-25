async function login_In_button(){
    await ethereum.request({ method: 'eth_requestAccounts' });
    window.location.reload();
}

window.addEventListener('DOMContentLoaded', async () => {


    let account = await web3.eth.getAccounts();
   
    coinbase = account[0];
    let ETHbalance = await web3.eth.getBalance(coinbase);
    ETHbalance = web3.utils.fromWei(ETHbalance, 'ether');

    let add = coinbase.substring(0,5)
    add = add +"....";
    $("#wallet-btn").text(add);
    let add2 = coinbase.substring(0,5)
    $("#wallet-2").text(add2);
   
 
    setNFT_ABI();
})

let BRO_Contract;
let BROClub;

let nums;
async function setNFT_ABI(){
    
    BRO_Contract= "0xFD839075cFdDed35c716d0f2AC4936B03899ec3b";

    BROClub = new web3.eth.Contract(BRO_ABI,BRO_Contract);

    nums = await BROClub.methods.totalSupply().call();
    totalMint = await BROClub.methods.total_Mint().call();

    nums = nums - totalMint;

    if(nums>0){
        $("#mintbut").css("background-color","white");
        $("#mintbut2").text("Mint");
    }else{
        $("#mintbut").css("background-color"," #c4c4c4");
        $("#mintbut2").text("Sold out");
       
    }

    $("#remaining").text(nums);
    //SalesVolume();
    
}

async function MintNFT(){

    nums = await BROClub.methods.totalSupply().call();
    totalMint = await BROClub.methods.total_Mint().call();

    nums = nums - totalMint;

    $("#remaining").text(nums);
    
    if(nums > 0){
        BROClub.methods.Mint(num).send({from: coinbase, value:web3.utils.toWei('0.06'*num, 'ether'), gas: 350000 })
        .then(function(error, event){ 
    
            window.location.reload();
        });
    }else{
        return;
    }
}

