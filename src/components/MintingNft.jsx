import React , {useState} from 'react';
import styled from 'styled-components';
import { FaInfoCircle } from "react-icons/fa";
import {ethers} from 'ethers';
import {abi} from './Abi';


// const addr = "0xA47F6274CF103292C480136B1A2518703fE036a2";
const ads = "0x2EA1EF4824ef9786bfb0e18FF3BF0d1122846670";
function MintingNft() {


const [inp , setInp] = useState(0);

let eths;
let cont;
let contract;


try{

  eths = new ethers.providers.Web3Provider(window.ethereum);

  cont =  eths.getSigner();
   contract = new ethers.Contract(ads,abi,cont);

}catch(e){

  console.log("you have to connect to a web3 provider like metamask to be able to use this Dapp");

}



const click_minting = async (evt)=>{
evt.preventDefault();
try{

  const mintings  = await contract.mint(inp);
  console.log(inp)

}catch(e){
window.alert('Your GoldenSpaceNft failed for ether of the reasons <br> 1. your minting number exceeds the maxinum mint number 3. <br> 2. you entered a null number 0')

}


}


  return (
    <Mintinholder className="container">
       <div className="row ">
            <div className="col-md-12 d-flex justify-content-center ">
                <div className="col-md-5 d-flex row ">
                <Title className="d-flex align-items-center fs-3 fw-bold w-100 justify-content-center "><Span></Span>GoldenSpaceNfts Minting Section<Span></Span></Title>

                <div className="alert alert-info row p-0 m-0 pt-5 px-4 mx-auto"><span  className="col-1"><FaInfoCircle className="d-none d-md-block" size="25px"></FaInfoCircle></span>
                <span className="col-11 pb-3">
                    Please ensure that you state the number of GoldenSpaceNfts to mint. Same also, minting is free as you are not required to pay for minting of GoldenSpaceNfts except for the gass free.
                    Note also that you can only mint a maximum of 3 GoldenSpaceNfts.<br/>
                    <span className="fs-4 fw-bold text-secondary">Happy minting!</span> 


                </span>
                

                </div>


                <div className="w-100">
                    <form>
                         <div className="form-group">
                             <label className="form-label pt-3">Enter Minting number (Ensure that you minting count does not exceed the maximum number 3)</label>
                             <input className="form-control "   value={inp}  onChange={(e)=>setInp(e.target.value)} placeholder="< 4 GoldenSpaceNfts" required/>
                             <button className="btn btn-outline-primary btn-lg my-3"  onClick={(e)=>click_minting(e)}>Mint</button>

                         </div>



                    </form>



                </div>


                
                
                  </div>
                


            </div>


       </div>


    </Mintinholder>
  )
}



const Title = styled.div`
@media (max-width: 768px){
text-align:center;

}

`;



const Span = styled.span`
width:15px;
height:4px;
background-color:#000;
margin-top:5px;
margin-left:5px;
margin-right:5px;
`;

const Mintinholder = styled.div`
min-height:100vh;
width:100%;
background-color:#ffffff;
display:flex;
justify-content:center;
padding-top:50px;

@media (max-width:767px) {
  min-height:150vh;
padding-top:100px;

}




`;




export default MintingNft