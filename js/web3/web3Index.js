async function login_In_button(){
    await ethereum.request({ method: 'eth_requestAccounts' });
    window.location.reload();
}

window.addEventListener('DOMContentLoaded', async () => {


    let account = await web3.eth.getAccounts();
   
    coinbase = account[0];
    let ETHbalance = await web3.eth.getBalance(coinbase);
    ETHbalance = web3.utils.fromWei(ETHbalance, 'ether');

    let add = coinbase.substring(0,12)
    add = add +"....";
    $("#login_address").text(add);
 
    setNFT_ABI();
})

