import React,{useState} from 'react';
import MintingNft from './MintingNft';
import {Link,useNavigate} from 'react-router-dom';

function HeaderSection({onclicker,connections}) {


  const [color1,setColor1]=useState("red");
  const [color2,setColor2]=useState("silver");
  const [color3,setColor3]=useState("silver");
const colorChanger1 = ()=>{
setColor1("red");
setColor2("silver");
setColor3("silver");
}
const colorChanger2 = ()=>{
  setColor1("silver");
  setColor2("red");
  setColor3("silver");

  
}
const colorChanger3 = ()=>{
  setColor1("silver");
  setColor2("silver");
  setColor3("red");

  
}




  return (

    <nav className="navbar navbar-expand-lg navbar-light bg-light "  style={{zIndex:'99',position:'absolute'}}>
    <div className="container">
        <Link to={'/'}  className="navbar-brand fw-bold text-primary" >GOLDENSPACE NFTS</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="d-flex  d-md-none d-lg-block d-lg-none">
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
          <button className="btn btn-primary bnt-lg" type="submit"   onClick={onclicker}>{(connections !== '')? connections[0] + connections[1] + connections[3] + connections[4] + connections[5] + '...' + connections[38] + connections[39] + connections[40] + connections[41]  : "Wallet connection"}</button>
        </div>
      
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01" >
        <ul className="navbar-nav me-auto mb-1 mb-lg-0">
          <li className="nav-item pt-2">
            <a className="nav-link active text-white" aria-current="page" href="#"></a>
          </li>
          <hr/>
    
          <Link className="nav-link" to="/"  onClick={()=>colorChanger1()}   style={{color:color1}}>Home</Link>
    
          <hr/>

            <Link to="/mint"  className="nav-link" onClick={()=>colorChanger2()} style={{color:color2}}>Mint Nft</Link>

    
   
          <hr/>
    
          <Link className="nav-link" to="/minted" onClick={()=>colorChanger3()} style={{color:color3}}>All Listed Nfts</Link>
    
          <hr/>


        </ul>
        <div className="d-flex d-none d-md-block">
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
          <button className="btn btn-primary bnt-lg" type="submit"   onClick={onclicker}>{(connections !== '')? connections[0] + connections[1] + connections[2] + connections[3] + connections[4] + '...' + connections[38] + connections[39] + connections[40] + connections[41]  : "Wallet connection"}</button>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default HeaderSection