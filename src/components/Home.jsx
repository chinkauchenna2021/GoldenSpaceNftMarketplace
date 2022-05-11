import React, {useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';

import MintingNft from './MintingNft';
import SingleCard from './SingleCard';
import SingleNft from './SingleNft';
import SliderSection from './SliderSection';
import MyMintedNft from './MyMintedNft';
import {ethers} from 'ethers';
import {abi} from './Abi';
import { NftSwapV4 } from '@traderxyz/nft-swap-sdk';


function Home() {



const navigate = useNavigate();

    const [acc,setAcc] = useState('');
    const [signpay,setSignPay] = useState({});
  const [nft_all,setNft_all] = useState([]);
  const [swapContent,setSwapContent] = useState({});
  
  const [swapContents,setSwapContents] = useState({});
    // const [capAddr , setCapAddr] = useState('');
    const [buyout , setBuyout] = useState(false);
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


}catch(err){


}

  


  
  
  
//   const clicker_connection =async ()=>{
//        if(window.ethereum){
//    await window.ethereum.request({method:'eth_requestAccounts'}).then(conn=>{
  
//      const getAcc = conn[0];
  
//      setAcc(getAcc);
  
  
//    });
  
//        }
  
//   }
  
  
  
    
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
   
  // const get_orderbook= await nftSwapSdk.getOrders({
  // nftToken:ads,
  // nftTokenId:nft_token,
  // chainId:"3"
  //  })
  
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
       'Content-Type':'application/json',
     
     }
     })
     
   
  
  if(fillTxReceipt.transactionHash){
  
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
  
  
    const viewers = (items)=>{
      // let alls = items;
  
  localStorage.setItem("singleItem",JSON.stringify(items));
  // console.log(items);
  navigate('/single');
   }
  
  
  const allfetcher = ()=>{
 fetch('https://avaxstorm.com/api.php/getallsales',{    
     method: "GET",
  headers:{

   "Content-Type":"application/json"
  }
}).then(reps=>{
  
  return reps.json()
  
  
    }).then(dat=>{
  
  
      setNft_all(Array.from(new Set(dat.result)))
      // console.log(dat.result.token_amount);
  
    })
    
   
  }
  
  
  
  useEffect(()=>{
  
    allfetcher()
  
  
  
  },[])
  
  
  






























































































console.log(nft_all);




  return (
    <div style={{marginTop:'70px',paddingTop:'70px'}}>
        
         <SliderSection/>
      {/* background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%); */}



<div className="alert alert-lg alert-danger text-center row p-0 m-0 col-md-10 mx-auto py-4 my-5">
    <div className="text-lead text-center text-dark fw-bold fs-2 my-2">GoldenSpaceNft Marketplace Info</div>
    <div className="py-2">This Marketplace is powered by its native token GoldBarToken (GBT) built on the Ropsten ethereum Network.</div>
<div className="py-2 fw-500">GoldBarToken Contract Address </div>

 <span className="text-primary fw-500" style={{fontSize:"12px"}}>0x98931d50cA4a9C795d2A3E1Bf311CA0946147d9c</span>
<div className="py-2 fw-500">GoldenSpaceNft Contract Address </div>
 <span className="text-primary fw-500" style={{fontSize:"12px"}}>0x2ea1ef4824ef9786bfb0e18ff3bf0d1122846670</span>

</div>






      <div className="container ">
        <div className="row" >
         
          <div className="py-5 lead fs-2 text-underline d-flex justify-content-center align-items-center  fw-bolder"  style={{color:'#003049'}}>Listed Nfts</div>
          {
          
          
          // let array_nfts = Array.from(new Set(nft_all));
          
          nft_all.map((itemer,id)=>{
        
return(

  <SingleCard key={Math.random()} nft_token={itemer.nft_token} time_listed={itemer.time_listed}  images={itemer.image} amount={Number(itemer.nft_amount)}  onclicker={()=>buynfts(itemer.nft_token)}  viewer={()=>viewers(itemer)} />

);
 })}
          
          {/* <SingleCard/>
          <SingleCard/>
          <SingleCard/> */}
         


         </div>
      </div> 








    </div>
  )
}

export default Home