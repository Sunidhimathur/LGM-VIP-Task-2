import React from 'react';

const Card = ({ name, email, id, lname}) => {
    return (
      <div className='tc grow bg-light-green br2 pa5 ma3 dib bw2 shadow-12'>
        <img alt='robots' src={`https://reqres.in/img/faces/${id}-image.jpg`} />
        <div>
		  <br />
          <h2>{name} {lname}</h2>
		  <br />
          <h3>{email}</h3>
        </div>
      </div>
    );
  }

export default Card;
