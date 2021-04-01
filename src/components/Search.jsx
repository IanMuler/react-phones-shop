import React from 'react';
import '../assets/Search.css';
import '../assets/fontello.css';
import { Link } from 'react-router-dom';


function Search (props){
    
    let link = '';

    if(props.search.length !== 0){
    link = "/search/" + props.search;
    }

    const pressEnter = (e) => {
        if(props.search.length !== 0){
        if (e.key === 'Enter') {
            props.toPushUrl.push(link)
        }
    }
}
    return(
        <div className="input-group d-flex align-items-center">
        <input onKeyDown={pressEnter} onChange={props.onChange} type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2"/>    
        <Link to={link}>     
        <button className="btn btn-outline-secondary icon-search" type="button" id="button-addon2"></button>
        </Link>
        </div>
);
}

export default Search;