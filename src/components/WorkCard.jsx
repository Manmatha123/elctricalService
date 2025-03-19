import React from 'react'
import "../styles/UserCard.css";
function WorkCard() {
  return (
    <>
    <div className="patient-card">
      <h3 className="title">Earthing work Transaction Info</h3>
      <div className="info-grid">
        <div className="info-item">
          <strong>workId:</strong> SKYE-000056
        </div>
        <div className="info-item">
          <strong>Total Amount:</strong> 30000
        </div>
        <div className="info-item">
          <strong>Start On:</strong> 01 Jan 2021
        </div>
      </div>
    </div>

    </>
  )
}

export default WorkCard
