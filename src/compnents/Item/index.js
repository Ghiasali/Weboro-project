
import React from 'react';

import img6 from './6.png';
const Item=(props) =>{
    return (
        <div>    <br /><br /><br />
        <br /><br /><br />
            <div className="row">
                <div className="col-sm-4">

                </div>
                <div className="col-sm-4">
                <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" data-toggle="tab" href="#home">LIST an ITEM</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-toggle="tab" href="#menu1">Rent an Item</a>
  </li>
 
</ul>


<div class="tab-content">
  <div class="tab-pane active container" id="home">
    <div className="row">
      <div className="col-sm-4">
    <img src={img6}  width="130"/>
    </div>
    <div className="col-sm-8">
  Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Minima maxime quam 
                            architecto quo inventore harum ex magni, dicta impedit.
                            consectetur adipisicing elit. Minima maxime quam 
                            architecto quo inventore harum ex magni, dicta impedit.
                            consectetur adipisicing elit. Minima maxime quam 
                            architecto quo inventore harum ex magni, dicta impedit.
                            </div>
  </div>
    </div>
    
  <div class="tab-pane container" id="menu1">2</div>
 
</div>
                    </div>
                    <div className="col-sm-4">
                    
                    </div>
                    
            </div>
            <br /><br /><br />
        </div>
        
    )
}

export default Item
