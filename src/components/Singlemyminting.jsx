import React from 'react'

function Singlemyminting({name,imgs,description,numb,onsale,clickedbt}) {
  return (
    <div className="col-md-3 col-sm-6 my-4">
    <div className="card">
       <div className="card-body">
           <img src={imgs} className="img-responsive h-100 w-100" alt="new--okay" style={{borderRadius: '20px'}} />
       </div>
       <div className="card-footer" >
           <div className="text-danger fw-bold">{numb} / {99}</div>
           <div className="card-caption fw-bold fs-5 py-2">{name}  <div>
           <div className="py-2" style={{fontSize: "11px"}}>{description}</div>
               {/* <div className="py-2" style={{fontSize: "15px"}}>Floor price</div> */}
               {/* <div className="row ">
                    <div className="col-4 py-2 border-end border-primary"> 
                    <div className="fw-bold text-secondary" style={{fontSize:'17px'}}>Auction</div>   
                    <div className="fw-bold" style={{fontSize:'18px'}}><sup>$</sup>{0}</div>
                    </div>
                    <div className="col-6 py-2 "> 
                    <div className="fw-bold text-secondary" style={{fontSize:'17px'}}>Buy Now</div> 
                    <div className="fw-bold" style={{fontSize:'18px'}}><sup>$</sup>{0}</div>
                    </div>

               </div> */}
               <div className="row  align-items-center d-flex pt-2 p-0 m-0 justify-content-between">
                 <div className="  col-sm-5 btn btn-outline-primary btn-lg my-3 "  data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={onsale}>Sale</div>

               {/* <div className=" col-sm-5 btn btn-info btn-lg my-3 ">View</div> */}

               </div>
         </div>
       </div>
    </div>
 </div>
 </div>
  )
}

export default Singlemyminting