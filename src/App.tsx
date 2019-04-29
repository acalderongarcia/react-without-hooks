import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@material-ui/core/Button';
import reduxLogo from './assets/images/reduxLogo.png';
import downloadApple from './assets/images/downloadApple.png';
import googlePlay from './assets/images/googlePlay.png';


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Support</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Company Info
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Some action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
      <div className="jumbotron firstSection text-center">
        <img className="logo" alt="Redux thunk explanation" />       
        <h1 className="card-title h1 my-5">
          Lorem
        </h1> 

        <p className="blue-text my-3 font-weight-bold">
          Switch from home page and use Redux to call a fun API
        </p>

        <div className="row d-flex justify-content-center">
          <div className="col-7 pb-2">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>

        <hr className="my-4" />

        <div className="pt-2">
          <Button type="button" className="pl-4 pr-4 btn mr-3 btn-blue waves-effect">Log In</Button>
          <Button type="button" className="pl-4 pr-4 btn btn-outline-primary waves-effect">Info</Button>
        </div>
      </div>
      <div className="jumbotron secondSection text-center">
        <img className="logo" src={reduxLogo} alt="Redux logo" />
        <h1 className="card-title h1 my-5">
        Download
        </h1>

        <p className="blue-text my-3 font-weight-bold">
          Links for app download
        </p>

        <div className="row d-flex justify-content-center">
          <div className="col-7 pb-2">
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga aliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </div>

        <hr className="my-4" />

        <a href="https://www.apple.com/ios/app-store/">
          <img className="downloadApple mr-2" src={downloadApple} alt="link to download from Apple Store"/>
        </a>

        <a href="https://www.apple.com/ios/app-store/">
          <img className="downloadApple" src={googlePlay} alt="link to download from google Store"/>
        </a>



      </div>
    </div>
  );
}

export default App;
