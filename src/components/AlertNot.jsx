import React from 'react';
import '../assets/styles/AlertNot.css'
function AlertNot(props) {
      return( 
        <div className="container-search-not d-flex justify-content-center pt-5">
        <div className= "search-not text-center pt-3 p-auto">
            <p className="search-title">{props.title}</p>
            <p>{props.subTitle}</p>
        </div>    
        </div>    
    
  );
}

export default AlertNot;

