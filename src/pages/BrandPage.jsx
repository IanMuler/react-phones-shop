import React, {Fragment} from 'react';
import PrincipalNavbar from '../components/PrincipalNavbar';
import PhonesList from '../components/PhonesList';
import { connect } from 'react-redux';

function BrandPage (props) {

const { phones } = props;

      return(
        <Fragment>
        <PrincipalNavbar/>
        <PhonesList
        brand={props.match.url.slice(1)}
        phones={phones}
        url={props.history.location.pathname}/>
        </Fragment>
  );
}

const mapStateToProps = state => {
  return{
    phones: state.media.phones,
  }
}

export default connect(mapStateToProps,null)(BrandPage);