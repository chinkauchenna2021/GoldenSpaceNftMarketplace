import React,{useEffect,useState} from 'react';
import styled from 'styled-components';
import original from './imagefolder/original(1).gif';
import {Link,useNavigate} from 'react-router-dom';
import { FaCaretLeft , FaRegHeart,FaEye,FaShare} from "react-icons/fa";
import {ethers} from 'ethers';
import {abi} from './Abi';
import { NftSwapV4 } from '@traderxyz/nft-swap-sdk';

function SingleNft() {



    const [acc,setAcc] = useState('');
    const [signpay,setSignPay] = useState({});
  const [nft_all,setNft_all] = useState([]);
  const [swapContent,setSwapContent] = useState({});

  const [empty,setEmpty] = useState('');
  
  const [swapContents,setSwapContents] = useState({});
    // const [capAddr , setCapAddr] = useState('');
  const [buyout,setBuyout] = useState(false)
  // const addr = "0xA47F6274CF103292C480136B1A2518703fE036a2";
  // const ads = "0x0fD8dB5480D5a04Dbc66983Cd8F8923e902f9A43";
  const ads = "0x2ea1ef4824ef9786bfb0e18ff3bf0d1122846670";
  // 0x2ea1ef4824ef9786bfb0e18ff3bf0d1122846670
  // 0x2ea1ef4824ef9786bfb0e18ff3bf0d1122846670

let eths;
let cont;
let contract;

try{
  
  
 eths = new ethers.providers.Web3Provider(window.ethereum);
    
 cont =  eths.getSigner();
 contract = new ethers.Contract(ads,abi,cont);


}catch(e){



}
  
const [coll,setColl] = useState({});



const {navigate} = useNavigate();






useEffect(()=>{


    if(window.ethereum){
        window.ethereum.request({method:'eth_requestAccounts'}).then(conn=>{
      
         const getAcc = conn[0];
      
         setAcc(getAcc);
      
      
       });
      
           }
      
try{
  
  let single = window.localStorage.getItem('singleItem');
 let collector = JSON.parse(single)


setColl(collector)
setEmpty('')

}catch(e){

  setEmpty('your single content is empty');
}


},[coll])







 
const buynfts = async (id)=>{


    const coll = await fetch(`https://avaxstorm.com/api.php/getsomesales/${id}`,{ 
       method: "GET",
       headers:{

     "Content-Type":"application/json"
    }
});
    const rl = await coll.json();
   
  
   const signedSingleValue = rl.result.maker_signed;
  
   const amount = rl.result.nft_amount;
   const nft_token = rl.result.nft_token;
   setSwapContents(rl.result);
  //  const {amount , signedSingleValue} = signpay;
       const FOUR_HUNDRED_TWENTY_WETH = {
         tokenAddress: '0x98931d50cA4a9C795d2A3E1Bf311CA0946147d9c', // USDC contract address
         amount: amount, // 69 USDC (USDC is 6 digits)
         type: 'ERC20', 
       };
       
  
   // [Part 2: Taker that wants to buy the punk fills trade]
   const nftSwapSdk = new NftSwapV4(eths,cont,"3");
   const walletAddressTaker = acc;
   const ads = "0x2ea1ef4824ef9786bfb0e18ff3bf0d1122846670";
   // Approve USDC to trade (if required)
   await nftSwapSdk.approveTokenOrNftByAsset(FOUR_HUNDRED_TWENTY_WETH, walletAddressTaker);
   
  const get_orderbook= await nftSwapSdk.getOrders({
  nftToken:ads,
  nftTokenId:nft_token,
  chainId:"3"
   })
  
  const meta_signatures = JSON.parse(signedSingleValue);
  
   const fillTx = await nftSwapSdk.fillSignedOrder(meta_signatures);
   const fillTxReceipt = await nftSwapSdk.awaitTransactionHash(fillTx.hash);
   console.log(`🎉 🥳 Order filled. TxHash: ${fillTxReceipt.transactionHash}`);
  
  
  
  //  const collss = await fetch(`http://localhost:8080/getsomesales/${id}`);
  //  const rlss = await collss.json();
  
  
  
   let sendingT = {id};
  
   console.log(id)
   await fetch(`https://avaxstorm.com/api.php/deletenft/${id}`,{
     method:'GET',
     headers:{
       'Content-Type':'Application/json',
     
     },

     })
     
   
  
  
  
  if(fillTxReceipt.transactionHash){
window.localStorage.removeItem('singleItem');

setBuyout(true);

  }
  
  
  
  
  
  
  
  
  
  
   // Fill order :)
  
  //  get_orderbook.orders.forEach((it,i)=>{
  
  //  if((it.nftTokenId === nft_token) && (it.erc20TokenAmount === amount)){
  
  // // it.order
  
  
  //  nftSwapSdk.fillSignedOrder(it.order).then(res=>{
  
  //   let tx_all = nftSwapSdk.awaitTransactionHash(res.hash)
  
  // return tx_all;
  
  //  }).then(tx_dat=>{
  
  // console.log(tx_dat.hash);
  
  //  })
  
  
  //  }
  
  
  //  })
  
  
  
  
  
  
  //  const fillTx = await nftSwapSdk.fillSignedOrder(JSON.stringify(signedSingleValue));
  //  const fillTxReceipt = await nftSwapSdk.awaitTransactionHash(fillTx.hash);
  //  console.log(`🎉 🥳 Order filled. TxHash: ${fillTxReceipt.transactionHash}`);
   
  
  
    }
  
  
























// console.log(coll)

  return (
    <div className="container d-flex align-items-center" style={{minHeight:'100vh',backgroundColor:'#ffffff',marginTop:'100px'}}>


        <div className="row container d-flex align-items-center">
        {buyout && <div  className="m-auto col-md-5 text-center alert alert-success alert-sm ">Your GoldenSpaceNfts have been listed for sale</div>}
<div className="col-md-6">
{/* image */}

<div className="d-flex align-items-center justify-content-end ">
<Image src={coll.image} className="img " alt="image"/>

</div>
</div>

<div className="col-md-6 mt-3">
<div className="d-flex align-items-center justify-content-start ">

<div className="d-flex justify-content-center align-items-center " style={{cursor: 'pointer'}}>
<span className="mx-1"><FaCaretLeft className="text-primary" size="25px"></FaCaretLeft></span>
<span className=" text-primary" style={{fontSize:'16px'}}  ><Link to="/">Back</Link></span>
</div>
</div>
<Holder className="d-flex align-items-center justify-content-between my-3">
<div className="mr-3"><FaRegHeart size="20px" className="mx-2"></FaRegHeart><span className="">274</span></div>
<div className="ml-4"><FaEye size="20px" className="mx-2"></FaEye><span>6088</span></div>
<div className=""><FaShare size="15px" className="mx-2"></FaShare><span>share</span></div>
</Holder>

<div className="my-4 ">
<span className="mx-2" >Chain: </span><span className="" style={{fontSize:'17px',fontWeight:'bold'}}>Ropsten Blockchain</span>
</div>



<div className="my-3">
<span className="fs-2 fw-bold d-flex justify-content-center align-items-center w-100">Nft Collectible #{coll.nft_token}<sup className="btn btn-outline-secondary btn-sm">marketplace</sup></span>
</div>


<div className="">
    <div className="fs-5 fw-bold ">Price</div>
    <div className=" fs-bold text-dark">{coll.nft_amount/1e18} GBT</div>
   </div>
<div className="mt-3">
<Button className="" onClick={()=>buynfts(coll.nft_token)}>Buy</Button>

</div>

</div>


            </div>



    </div>
  )
}


const Button =styled.div`
width:200px;
height:35px;
display:flex;
align-items:center;
justify-content:center;
background-color:#48cae4;
font-size:15px;
color:#ffffff;
border-radius:30px;
font-weight:600;
transition:all 0.8s linear;
animation:moving 2s linear Infinite;
cursor:pointer;
&:hover:hover{
background-color:#219ebc;
transition:all 0.8s linear;


}
@keyframes moving{
0%{
 transform:translateX(0px)   
}
20%{
    transform:translateX(0px)     
}
40%{
    transform:translateX(0px)   
}
60%{
    transform:translateX(10px)   
}
80%{
    transform:translateX(0px)      
}
100%{
    transform:translateX(0px)   
}

}

`;

const Holder = styled.div`
width:43%;


`;
const Image = styled.img`
width:75%;
height:80%;
border-radius:10px;



`;



export default SingleNft