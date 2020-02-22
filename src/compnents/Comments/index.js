
import React from 'react';
import './Style.css';

const Comments=(props) =>{
    return (
        <div>    
            <div className="comments">
            <div class="col-lg-12 text-center"><br /><br />
                    <h2 style={{color:'white'}}>What our users say....
                        </h2>
            </div>  
                <div className="row">
                    <div class="col-sm-3">
                        </div>
                    <div class="col-sm-6"><br /><br />
                            <i style={{color:'white'}}>Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Minima maxime quam 
                            architecto quo inventore harum ex magni, dicta impedit.
                            consectetur adipisicing elit. Minima maxime quam 
                            architecto quo inventore harum ex magni, dicta impedit.
                            consectetur adipisicing elit. Minima maxime quam 
                            architecto quo inventore harum ex magni, dicta impedit.
                                </i>
                     </div>
                     <div class="col-sm-3">
                        </div>
                     </div>
            </div>
        </div>
        
    )
}

export default Comments
