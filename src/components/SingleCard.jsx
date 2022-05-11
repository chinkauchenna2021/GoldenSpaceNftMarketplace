import React from 'react';
// import original from './imagefolder/original(1).gif';

function SingleCard({onclicker,viewer,nft_token,amount,images,time_listed}) {
  return (
    <div className="col-md-4 col-sm-6 my-4">
       <div className="card">
          <div className="card-body">
              <img src={images} className="img-responsive h-100 w-100" alt="new--okay" style={{borderRadius: '20px'}} />
          </div>
          <div className="card-footer" >
              {/* <div className="text-danger fw-bold">{nft_token} / {99}</div> */}
              <div className="card-caption fw-bold fs-2 py-2">{"NFT Collectible #"+nft_token} <div>
  
<div className="fw-400"  style={{fontSize:'12px'}}>A collection of 100 Nft Collectibles</div>
                  <div className="py-2" style={{fontSize: "15px"}}>Floor price</div>
                  <div className="row ">
                       <div className="col-4 py-2 border-end border-primary"> 
                       <div className="fw-bold text-secondary" style={{fontSize:'17px'}}>Auction</div>   
                       <div className="fw-bold" style={{fontSize:'18px'}}>{"GBT "+(amount/1e18)}</div>
                       </div>
                       <div className="col-6 py-2 "> 
                       <div className="fw-bold text-secondary" style={{fontSize:'17px'}}>Buy Now</div> 
                       <div className="fw-bold" style={{fontSize:'18px'}}>{"GBT "+(amount/1e18)}</div>
                       </div>

                  </div>


                  <div className="py-2" style={{fontSize: "15px"}}>Time Listed</div>
                  <div className="row ">
                       <div className="col-12 py-2 border-end border-primary"> 
                       <div className="fw-bold text-secondary" style={{fontSize:'17px'}}>{time_listed}</div>  
                       </div>
                     

                  </div>





                  <div className="row  align-items-center d-flex pt-2 p-0 m-0 justify-content-between">
                  <div className="  col-sm-5 btn btn-outline-primary btn-lg my-3 " onClick={onclicker}>Buy</div>
                  <div className=" col-sm-5 btn btn-info btn-lg my-3 " onClick={viewer}>View</div>

                  </div>
            </div>
          </div>
       </div>
    </div>
    </div>
  )
}

export default SingleCard