import React from 'react';
import '../assets/styles/Search.css';
import { Link, withRouter } from 'react-router-dom';


function Search (props){
    
    let link = '';

    if(props.search.length !== 0){
    link = "/search/" + props.search;
    }

    const pressEnter = (e) => {
        if(props.search.length !== 0){
        if (e.key === 'Enter') {
            props.history.push(link)
        }
    }
}
    return(
        <div className="input-group d-flex align-items-center">
        <input onKeyDown={pressEnter} onChange={props.onChange} type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>    
        <Link to={link}>     
        <button className="btn btn-outline-secondary icon-search" type="button" id="button-addon2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        </button>
        </Link>
        </div>
);
}

export default withRouter(Search);