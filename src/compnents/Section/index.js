
import React from 'react';
import img1 from './3.PNG';
import img2 from './2.PNG';
import img3 from './1.PNG';
import imgg from './mobb.png';
import img5 from './5.png';
import img6 from './6.png';
const Section=(props) =>{
    return (
       
        <div>       <br /> <br /> <br />
                <section class="page-section" id="services">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading "><p style={{color:'#820882'}}>Why us ?</p></h2>
          
        </div>
      </div><br /><br /><br />
      <div class="row text-center">
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"><img src={img3} alt="img"  width="100"/></i>
          </span>
          <h4 class="service-heading">Study</h4>
          <p class="text-muted">items on idle? List class notes, textbooks, and study meterial.</p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-laptop fa-stack-1x fa-inverse"><img src={img1} alt="img" width="100"/></i>
          </span>
          <h4 class="service-heading">Earn</h4>
          <p class="text-muted">Set your own prices and start earning.</p>
        </div>
        <div class="col-md-4">
          <span class="fa-stack fa-4x">
            <i class="fas fa-circle fa-stack-2x text-primary"></i>
            <i class="fas fa-lock fa-stack-1x fa-inverse"><img src={img1} alt="img" width="100"/></i>
          </span>
          <h4 class="service-heading">Succeed</h4>
          <p class="text-muted">Make money while Exeling in your classes!</p>
        </div>
      </div>
    </div>
  </section>
<br /><br /><br /><br /><br />
  <section>
  <div class="container">
      <div class="row">
      <div class="col-lg-12 text-center">
          <h2 class="section-heading "><p style={{color:'#820882'}}>Who we are ?</p></h2>
          <b>We bore is the plateform  that  allows students  to list and borrow educational meterials fro one another
              .We are believers in an educational system where studnts can share there knowledge and collectivly succeed
              .</b>
          
        </div>
        
       
       
       
         </div><br /><br />
         <div class="row">
         <div className="col-md-3">
           </div>
         <div className="col-md-7">
              <img src={imgg} alt="img"  width="170" />
              <img src={img5} alt="img"  width="170"/>
              <img src={img6} alt="img" width="170"/>
        </div>
        <div className="col-md-2">
           </div>
        </div>
         </div>  
                  
  </section>
        </div>
        
    )
}

export default Section
