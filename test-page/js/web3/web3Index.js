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
   
 
    //setNFT_ABI();
})

let BRO_Contract;
let BROClub;


async function setNFT_ABI(){

    BRO_Contract= "0x8Cf508F0Ea3B1c693AE66e65Fb8A200b66e64020";

    BROClub = new web3.eth.Contract(R_ABI,R_Contract);
    //SalesVolume();
    
}

async function MintNFT(){

    let nums = await BROClub.methods.TotalSupply().call();
    
    if(nums <= 6666){
        BROClub.methods.mint().send({from: coinbase, value:web3.utils.toWei('0.06', 'ether'), gas: 350000 })
        .then(function(error, event){ 
    
            window.location.reload();
        });
    }else{
        return;
    }
}

