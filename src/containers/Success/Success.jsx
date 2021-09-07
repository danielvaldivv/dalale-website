import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Map from '../../components/Map/Map';
import useGoogleAddress from '../../hooks/useGoogleAddress';
import './Success.scss';

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const locationOne = useGoogleAddress(`${buyer[0].state} ${buyer[0].city} ${buyer[0].address}`);
  const locationTwo = useGoogleAddress(`${buyer[0].state} ${buyer[0].city} ${buyer[0].houseGroup}`);
  let locationVerified = null

  if(locationOne.lat){
    locationVerified = locationOne
  } else {
    locationVerified = locationTwo
  }


  return (
    <div className="Success">
      <div className="Success-content">
        <h2>{`${buyer[0].name}, Gracias por tu compra`}</h2>
        <span><p>Tu pedido llegará en 3 días a tu dirección.</p></span>
        <div className="Success-map">
          <Map data={locationVerified} />
        </div>
      </div>
    </div>
  );
};

export default Success;