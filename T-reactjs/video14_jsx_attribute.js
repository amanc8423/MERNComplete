import React from 'react';
import ReactDOM from 'react-dom/client';

const img1 = "https://picsum.photos/200/300" ;

const img2 = "https://picsum.photos/250/300" ;

const img3 = "https://picsum.photos/300/300" ;

const links = "https:/www.google.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // search html global attributes
  // we call html attribute as jsx attribute in react
  // attribute ame follow camelcase
  <> 
  <h1 contentEditable="true" >My name is Aman</h1>
  
{/* <img src="https://picsum.photos/200/300" alt="photo not found" />   empty elements are always closed in react */}

<img src={img1} alt="random images" />
<img src={img2} alt="random images" />
<a href={links} target="_blank">  
<img src={img3} alt="random images" />
</a>

  </>
);


 