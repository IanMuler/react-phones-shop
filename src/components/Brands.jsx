import React, { Fragment } from 'react';
import Brand from './Brand';
import Banner from './Banner';
import '../assets/styles/Brands.css'

function Brands (props) {

      return(
        <Fragment> 
            <Banner banner={props.banner}/>
        <div className="container-brands">
            {Object.values(props.brands).map(brand =>
                <Brand
                    key={brand.image}                
                    image={brand.image} 
                    background={brand.background}
                    href={brand.href}
                />
            )}
        </div>
        </Fragment> 
  );
}

export default Brands;

