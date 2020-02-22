import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './compnents/Header';
import Section from './compnents/Section';
import Comments from './compnents/Comments';
import Item from './compnents/Item';


function App() {
  return (
    <div>
    <div className="progress">  
    </div>
    <div >
      
       <Header />
       <Section />
       <br /><br />
       <br /><br />
       <br /><br />
       <br /><br />
       <Comments />
       <Item />
       <br /><br />
       <br /><br />
       
       <div style={{background:'#892f9c',}}>
         <div class="col-lg-12 text-center"><i style={{color:'white'}}>&copy;Copyright 2019 Weboro Co.All rights Reserved.</i></div>
       </div>
    </div>

    </div>
  );
}

export default App;
