import React, {useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import HeaderSection from './components/HeaderSection';
import MintingNft from './components/MintingNft';
import SingleCard from './components/SingleCard';
import SingleNft from './components/SingleNft';
import SliderSection from './components/SliderSection';
import MyMintedNft from './components/MyMintedNft';
import {ethers} from 'ethers';
import {abi} from './components/Abi';
import Home from './components/Home';
import { NftSwapV4 } from '@traderxyz/nft-swap-sdk';

function App() {


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






const clicker_connection =async ()=>{
     if(window.ethereum){
 await window.ethereum.request({method:'eth_requestAccounts'}).then(conn=>{

   const getAcc = conn[0];

   setAcc(getAcc);


 });

     }

}



  
// const buynfts = async (id)=>{


//   const coll = await fetch(`http://localhost/phpapi/api.php/getsomesales/${id}`,{   
//   //     method: "GET",
//   //     headers:{

//   //  "Content-Type":"application/json"
//   // }
// }).then(resp=>{

//   console.log(resp)
// })
//   const rl = await coll.json();
 

//  const signedSingleValue = rl.result[0].maker_signed;

//  const amount = rl.result[0].nft_amount;
//  const nft_token = rl.result[0].nft_token;
//  setSwapContents(rl.result[0]);
// //  const {amount , signedSingleValue} = signpay;
//      const FOUR_HUNDRED_TWENTY_WETH = {
//        tokenAddress: '0x98931d50cA4a9C795d2A3E1Bf311CA0946147d9c', // USDC contract address
//        amount: amount, // 69 USDC (USDC is 6 digits)
//        type: 'ERC20', 
//      };
     

//  // [Part 2: Taker that wants to buy the punk fills trade]
//  const nftSwapSdk = new NftSwapV4(eths,cont,"3");
//  const walletAddressTaker = acc;
//  const ads = "0x2ea1ef4824ef9786bfb0e18ff3bf0d1122846670";
//  // Approve USDC to trade (if required)
//  await nftSwapSdk.approveTokenOrNftByAsset(FOUR_HUNDRED_TWENTY_WETH, walletAddressTaker);
 
// const get_orderbook= await nftSwapSdk.getOrders({
// nftToken:ads,
// nftTokenId:nft_token,
// chainId:"3"
//  })

// const meta_signatures = JSON.parse(signedSingleValue);

//  const fillTx = await nftSwapSdk.fillSignedOrder(meta_signatures);
//  const fillTxReceipt = await nftSwapSdk.awaitTransactionHash(fillTx.hash);
//  console.log(`🎉 🥳 Order filled. TxHash: ${fillTxReceipt.transactionHash}`);



// //  const collss = await fetch(`http://localhost:8080/getsomesales/${id}`);
// //  const rlss = await collss.json();



//  let sendingT = {id};

// //  console.log(id)
//  await fetch(`http://localhost/phpapi/api.php/deletenft/${id}`,{
//   //  method:'POST',
//   // headers: {"Content-type": "application/json;charset=UTF-8"},
//   //  body:JSON.stringify(sendingT)
   
//    }).then(resp=>{

//     console.log(resp);
//    })
   
 

// if(fillTxReceipt.transactionHash){

// setBuyout(true);


// }












//  // Fill order :)

// //  get_orderbook.orders.forEach((it,i)=>{

// //  if((it.nftTokenId === nft_token) && (it.erc20TokenAmount === amount)){

// // // it.order


// //  nftSwapSdk.fillSignedOrder(it.order).then(res=>{

// //   let tx_all = nftSwapSdk.awaitTransactionHash(res.hash)

// // return tx_all;

// //  }).then(tx_dat=>{

// // console.log(tx_dat.hash);

// //  })


// //  }


// //  })






// //  const fillTx = await nftSwapSdk.fillSignedOrder(JSON.stringify(signedSingleValue));
// //  const fillTxReceipt = await nftSwapSdk.awaitTransactionHash(fillTx.hash);
// //  console.log(`🎉 🥳 Order filled. TxHash: ${fillTxReceipt.transactionHash}`);
 


//   }


//   const viewers = (items)=>{
//     // let alls = items;

// localStorage.setItem("singleItem",JSON.stringify(items));
// // console.log(items);
//  }


// const allfetcher = ()=>{
// const mak= fetch('http://localhost/phpapi/api.php/getallsales',{     
//   method: "GET",
//   headers:{
//      "Content-Type":"application/json",
//      "mode":"no-cors"
//          }
// }).then(reps=>{

// return reps.json()


//   }).then(dat=>{

//     // let final_fetch = all_fetch.json();
// // console.log(dat.result)
//     setNft_all(older=>[...older,dat.result]);
//   })
  
 
// }



// useEffect(()=>{

//   allfetcher()



// },[])






  return (
    <div className="container-fliud  " style={{backgroundColor: '#4158D0',
      backgroundImage: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)'
      }}>


      <div className="row p-0 m-0">
      {buyout && <div  className="m-auto col-md-5 text-center alert alert-success alert-sm ">You just bought a  GoldenSpaceNfts and it has been transfered to your collections</div>}


       <Router>
         
{(acc === "")?

<div className="w-100 alert-md alert-danger fs-5 fw-bold ">
  Please connect with metamask or any <b>Web3</b> provider to use the GoldenSpaceNft marketplace
</div>

:

""

}




        <HeaderSection  connections={acc}   onclicker={()=>clicker_connection()}/>
        <Routes>
        <Route   path="/" element={<Home/>} >
        
         {/* <SliderSection/> */}
      {/* background: linear-gradient(90deg, #1CB5E0 0%, #000851 100%); */}

      {/* <div className="container">
        <div className="row"> */}
          {/* <div>{nft_all}</div> */}
          {/* <div className="py-5 lead fs-2 text-underline d-flex justify-content-center align-items-center  fw-bolder"  style={{color:'#003049'}}>Listed Nfts</div>
          {nft_all.map((itemer,id)=>{
return(

  <SingleCard key={Math.random()} nft_token={itemer.nft_token} time_listed={itemer.time_listed}  images={itemer.image} amount={itemer.nft_amount}  onclicker={()=>buynfts(itemer.nft_token)}  viewer={()=>viewers(itemer)} />

);
 })}
           */}
          {/* <SingleCard/>
          <SingleCard/>
          <SingleCard/> */}
         


        {/* </div>
      </div>*/}
        </Route> 

        <Route path='/single' element={ <SingleNft/>} >
          
          </Route>

        <Route path='/mint' element={<MintingNft/>} >
          
        </Route>

        <Route path='/minted' element={<MyMintedNft  accs={acc}/>}>
       
        </Route>

          </Routes>
      </Router>
      </div>
    </div>
  );
}



export default App;
