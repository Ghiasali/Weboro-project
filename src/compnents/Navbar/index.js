import React from 'react'

const Navbar=()=> {
    return (
        <div >
       {/* <nav class="navbar navbar-expand-sm ">

<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#"><i style={{color:'white'}}>Home</i></a>
          </li>
          
          <li class="nav-item">
          <a class="nav-link" href="#"><i style={{color:'white'}}>Why us?</i></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"><i style={{color:'white'}}>Who we are</i></a>

          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"><i style={{color:'white'}}>Jobs </i></a>

          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"><i style={{color:'white'}}>Investors</i></a>

          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"><i style={{color:'white'}}>Contact us</i></a>

          </li>
        </ul>
        </div>
      
    </nav>*/}
      <nav class="navbar navbar-expand-lg navbar-light ">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#"><i style={{color:'white'}}>Home</i><span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#"><i style={{color:'white'}}>Why us?</i></a>
          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"><i style={{color:'white'}}>Who we are</i></a>

          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"><i style={{color:'white'}}>Jobs </i></a>

          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"><i style={{color:'white'}}>Investors</i></a>

          </li>
          <li class="nav-item">
          <a class="nav-link" href="#"><i style={{color:'white'}}>Contact us</i></a>

          </li>
    </ul>
   
  </div>
</nav>
        </div>
    )
}

export default Navbar
