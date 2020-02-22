
import React from 'react';
import './style.css';
import Navbar from '../Navbar';
import himg from './header2.png'
const Header=(props) =>{
    return (
       
        <div>
                    <div className="main-header1">
<div className="main-header2">
                               
                                                    
                                                   
                                     <div className="row">
                                         <div className="col-md-2">
                                               
                                         </div>
                                         <div className="col-md-2">
                                             <br />
                                         <h2 style={{color:'white'}}>
                                             WeBoro
                                             </h2>
                                               </div>
                                         
                                         <div className="col-md-3">
                                             
                                             </div>
                                             <div className="col-md-5">
                                             <Navbar />
                                             </div>
                                         
                                         
                                         </div>  

                                          <br /><br /><br /><br />
                                          

                                         <div className="row">
                                                    <div className="col-sm-2">
                                                   
                                                    </div>
                                                    <div className="col-sm-5">


                                                    <h2 class="section-heading "><p style={{color:'white'}}>We help students study,earn, <br />and succseed</p></h2>
                                                    <br /><div className="caption">Beborw is the plateform taht allows students to list  and borrow textbooks,stusy guides ,lecture notes
                                                        </div>
                                                        
                                                    
                                                    
                                                    </div> 
                                                    <div className="col-sm-5">
                                                        <br /><br />
                                                        <img src={himg} width="400"/>
                                                        </div>        
                                          </div> 
                                          
                              
                                      
                                                  
                                



</div>
                    </div>


                    
        </div>
        
    )
}

export default Header
