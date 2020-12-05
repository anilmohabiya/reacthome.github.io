import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';
import img from  '/testreact/src/assets/back.jpg';
import panda from '/testreact/src/assets/panda.jpg';
import javascript from '/testreact/src/assets/javascript.jpg';
import java from '/testreact/src/assets/java.jpg';
import pythen from '/testreact/src/assets/pythen.jpg';
const Banner =()=>{
    return(
        <>
         <div className="container-fluid nav_bg">
      <div className="row">
      <div className="col-10 mx-auto">
     
<div class="container">
  <img src={img} alt={img} style={{width:"100%"}}/>
  
  <div class="centered"><h4>KNOW MORE,<span className="pp"><br/>GROW MORE</span></h4>


<form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder='Enter Course name ' aria-label="Search"/>
       <button type="button" class="btn btn-success mt-2">Search</button>
      
    </form>
  </div>
</div>

  <h1 style={{textAlign:"center",marginTop:'10px',fontWeight:"bold"}}>I want to Learn </h1>
 
  
  <div className="col-md-4 col-10 mx-auto mt-0">
  
<div class="col-xl-4 col-md-6 mb-4 mt- mr-5">  
  
  
 <Link to="#" > 
  <div class="card" style={{width: '10rem',marginTop:"8px"}}>
  <img src={panda} class="card-img-top" alt="..."/>
</div>
</Link>
  <Link to="#" > 
  <div class="card" style={{width: '10rem',marginTop:"8px"}}>
  <img src={java} class="card-img-top" alt="..."/>
</div>
</Link>

<Link to="#" > 
<div class="card" style={{width: '10rem',marginTop:"8px"}}>
  <img src={javascript} class="card-img-top" alt="..."/>
</div>
</Link>


<Link to="#" > 
<div class="card" style={{width: '10rem',marginTop:"8px"}}>
  <img src={pythen} class="card-img-top" alt={pythen}/>
</div>
</Link>
</div>


      <p style={{fontWeight:"bold"}}>Join Asquero Community</p>
     <div className="ml-5 mb-4">
      <Link to="#"><TwitterIcon /></Link> 
       <Link to="#"><InstagramIcon/></Link>
       <Link to="#"><LinkedInIcon /></Link>
       <Link to="#"><FacebookIcon /></Link>

       </div>
      </div>
        </div>
        </div>
        </div>
        
  
        </>
    )
}
export default Banner;