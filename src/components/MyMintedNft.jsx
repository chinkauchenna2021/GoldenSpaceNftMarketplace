import React , {useState,useEffect} from 'react';
import {ethers} from 'ethers';
import {abi} from './Abi';
import Singlemyminting from './Singlemyminting';
import { NftSwapV4 } from '@traderxyz/nft-swap-sdk';











function MyMintedNft({accs}) {
console.log(accs)
  const [addr,setAddr] = useState('');
  const [valueholder , setValueholder ] = useState([]);
// const  [loaded , setLoaded]=useState(true);
  const [urlfetcher,setUrlfetcher] = useState('');
  const [total,setTotal] = useState(''); 
  const [getTokenId,setGetTokenId] = useState(0); 

  const [amountToSale,setAmountToSale] = useState(''); 

  const [amountError,setAmountError] = useState(false); 


  const [clickedBtn , setClickedBtn] = useState(false);

  const [imageHolders , setImageHolders] = useState("");



  // const [capAddr , setCapAddr] = useState('');

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
  


const [balance , setBalance] = useState('');

const [soldout,setSoldout] = useState(false);






    if(accs) {


      const netId =  eths.getNetwork()
      if((netId.name === "ropsten")){
      
       const nftSwapSdk = new NftSwapV4(eths, cont, "3");
      }
      
      
      





      contract.baseURI().then(urlss=>{
       
        setUrlfetcher(urlss)
       
        })
     
     
      
        contract.balanceOf(accs).then(bal=>{
     setBalance(bal.toString());
        })
    
        contract.totalSupply().then(t=>{
          setTotal(t.toString());
             })

        
    






    }    

  





useEffect(()=>{
// console.log(balance,total,urlfetcher)
       

  for(let i = 0; i < Number(total); i++){
    contract.ownerOf(i).then(own=>{
        if(own.toUpperCase() === accs.toUpperCase()){
             fetch(`https://${urlfetcher}${i}`).then(gather=>{
        
                 return gather.json();
  
             }).then(data=>{
                 
                setValueholder((old)=>[...old,data]);     
        // console.log(valueholder)
              //  valueholder.push(data);
             })
            }
         
       })
       
  }
  
},[balance,accs,total,urlfetcher])


 const saling = async (id,urls)=>{

// Supply a provider, signer, and chain id to get started
// Signer is optional if you only need read-only methods

// const nftSwapSdk = new NftSwapV4(eths, cont, chainId);
setGetTokenId(id.toString());
setImageHolders(urls)

}



const sale_order = async ()=>{
  let wei = new ethers.utils.parseEther(amountToSale);
  let wei_convert = wei.toString();

const CRYPTOPUNK = {
  tokenAddress: ads,
  tokenId: getTokenId,
  type: 'ERC721', // 'ERC721' or 'ERC1155'
};

const SIXTY_NINE_USDC = {
  tokenAddress: '0x98931d50cA4a9C795d2A3E1Bf311CA0946147d9c', // USDC contract address
  amount: wei_convert, // 69 USDC (USDC is 6 digits)
  type: 'ERC20',
};

const walletAddressMaker = accs;



   if(amountToSale !== ''){

    const ctx = new NftSwapV4(eths,cont,3);

 let makerorder =   await ctx.approveTokenOrNftByAsset(CRYPTOPUNK, walletAddressMaker);
 console.log(makerorder);

// Build order
const order = ctx.buildOrder(
  CRYPTOPUNK, // Maker asset to swap
  SIXTY_NINE_USDC, // Taker asset to swap
  walletAddressMaker,
);
// Sign order so order is now fillable
const signedOrder = await ctx.signOrder(order);

// const posted = await ctx.postOrder(signedOrder,"3");
// console.log(posted);

if(signedOrder !== null){
const sendingValueAll =new FormData();
// const signedOrders = JSON.stringify(signedOrder);

sendingValueAll.append('gettoken',getTokenId);
sendingValueAll.append('weiconvert',wei_convert);
let signered = JSON.stringify(signedOrder);
sendingValueAll.append('imageholder',imageHolders);


console.log(getTokenId,wei_convert,signedOrder,imageHolders,)

// console.log(getTokenId);

await fetch(`https://avaxstorm.com/api.php/postsales/a?gettoken=${getTokenId}&weiconvert=${wei_convert}&signedmaker=${signered}&imageholder=${imageHolders}`,{
  }).then(resper=>{

    console.log(resper)
  })
  

  setSoldout(true)

}

setClickedBtn(true);

  }else{

setAmountError(true)


  }





}



















return (
    <div className="container" style={{minHeight:'100vh',paddingTop:'50px'}}>
        <div className="row">
          <div className="col-md-12 text-center fs-4 text-primary fw-bold mt-5 mb-4">Your GoldenSpaceNfts</div>

{soldout && <div  className="m-auto col-md-5 text-center alert alert-success alert-sm ">Your GoldenSpaceNfts have been listed for sale</div>}



          <div className="row p-0 m-0 ">

            
         


{(valueholder.length !== 0)?

valueholder.map((items,ids)=>{

var slicer = (items.image).slice(7);
var nuddle = (items.name).slice(17);
var urls = "https://ipfs.io/ipfs/"+slicer ;

return(


<Singlemyminting   clickedbt={clickedBtn}  name={items.name} description={items.description} imgs={"https://ipfs.io/ipfs/"+slicer } numb={nuddle} key={Math.random()}   onsale={()=>saling(nuddle,urls)} />




);




})
:
<div className="col-md-12  d-flex justify-content-center mt-4">
<div className='col-md-5 text-center alert alert-info alert-lg fs-5 fw-bold text-dark'>You have no avaliable GoldenSpaceNfts</div>
</div>

}


          </div>

        
        </div>



        {/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
{(amountError === true )?
  
  <div className="alert alert-danger alert-lg text-center text-dark">Please fillup the GBT Amount before Submitting this sale Order</div>
  :
  ""
  }
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-primary" id="exampleModalLabel">GoldenSpaceNfts Sale Request</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
  
            <div className="form-group">
                <label className="my-3 text-secondary w-100">Enter GoldenSPaceNfts Sale Amount in GoldBarToken (GBT)</label>
                <input className="form-control mb-2" type="text" onChange={(e)=>setAmountToSale(e.target.value)}  required />
            </div>
            <button  className="btn btn-primary"  onClick={()=>sale_order()} >Sale Order</button>
      
      </div>
 
    </div>
  </div>
</div>















    </div>
  )
}

export default MyMintedNft