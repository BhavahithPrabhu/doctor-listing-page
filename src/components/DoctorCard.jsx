// src/components/DoctorCard.jsx
import React from 'react';

const DoctorCard = ({ doctor }) => (
  <div className="doctor-card" data-testid="doctor-card">
    <div data-testid="doctor-name"><strong>{doctor.name}</strong></div>
    <div data-testid="doctor-specialty">{doctor.speciality.join(', ')}</div>
    <div data-testid="doctor-experience">{doctor.experience} yrs exp.</div>
    <div data-testid="doctor-fee">₹ {doctor.fees}</div>
  </div>
);

export default DoctorCard;
