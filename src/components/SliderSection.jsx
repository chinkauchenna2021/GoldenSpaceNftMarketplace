import React from 'react';
import styled from 'styled-components';
import original from '../components/imagefolder/original(1).png';
import original1 from '../components/imagefolder/original.jpeg';
import originalgif from '../components/imagefolder/original.gif';

function SliderSection() {
  return (
    <div className="container">
       <Containerholder className="row p-0 m-0">
         
       <div id="carouselExampleCaptions" className="carousel slide mt-5" data-bs-ride="carousel" style={{position:'relative'}}>

    {/* <Button   className="" >Upcoming</Button> */}
  <div className="carousel-indicators ">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={original} className="d-block w-100" alt="..." style={{height:'400px',objectFit:'cover',objectPosition:'center',borderRadius:'40px'}}/>
      <div className="carousel-caption d-none d-md-block py-5" style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
        <h5 className="text-danger fw-bold fs-3">GoldBar NFT</h5>
        <p>Your best place for real original Nft</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={original1} className="d-block w-100" alt="..." style={{height:'400px',objectFit:'cover',objectPosition:'center',borderRadius:'40px'}} />
      <div className="carousel-caption d-none d-md-block py-5" style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
        <h5 className="text-danger fw-bold fs-3 text-lead">Ethereum Nft Marketplace </h5>
        <p className="">Nft market place powered by Ropsten Ethereum Node.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={originalgif} className="d-block w-100" alt="..." style={{height:'400px',objectFit:'cover',objectPosition:'center',borderRadius:'40px'}}/>
      <div className="carousel-caption d-none d-md-block py-5" style={{backgroundColor:'rgba(0,0,0,0.2)'}}>
        <h5 className="text-danger fw-bold fs-3 text-lead">Multi-minting capability</h5>
        <p className="">Gives you the ability to minit Nfts for free saves gass fee by giving you the ability to mint many at once.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>




       </Containerholder>
    </div>
  )
}


const Containerholder = styled.div`
min-height:300px;
padding:20px 100px 0px 100px;
border-radius:20px;

@media (max-width: 768px) {
padding:0px 0px 0px 0px;
border-radius:0px;
min-height:0px;


}



`;









// const Button = styled.div`
// position:absolute;
// z-index:20;
// height:40px;
// width:150px;
// display:flex;
// justify-content:center;
// align-items:center;
// background-color:#00b4d8;
// left:45%;
// top:5%;
// color:#fff;
// border-radius:20px;

// @media (max-width:767px)
// {
// left:calc(100% - 70%);


// }
// `;




export default SliderSection