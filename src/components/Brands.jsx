import React from 'react';
import Brand from './Brand';
import '../assets/Brands.css'

function Brands (props) {

      return(
        <div className="container-brands">
            {props.brands.map(brand =>
                <Brand
                    key={brand.image}                
                    image={brand.image} 
                    href={brand.href}
                />
            )}
        </div>
  );
}

export default Brands;

