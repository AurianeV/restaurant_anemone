import React from 'react';
import { forwardRef } from 'react';

const Reservation = forwardRef (({props}, ref) => {
  return (
    <div ref={ref} className="section">
      <p>RESERVATION ICI</p>
    </div>
  );
})

export default Reservation;
