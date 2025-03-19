import React from 'react'
import "../styles/UserCard.css";
function UserCard() {
  return (
    <>
    <div className="patient-card">
      <h3 className="title">Client Info</h3>
      <div className="info-grid">
        <div className="info-item">
          <strong>Name:</strong> Manmatha Mandal
        </div>
        <div className="info-item">
          <strong>Phone:</strong> 9827148502
        </div>
        <div className="info-item">
          <strong>Address:</strong> Dumuria, Mayurbhanj
        </div>
        <div className="info-item">
          <strong>Id:</strong> SKYE-000056
        </div>
      </div>
    </div>

    </>
  )
}

export default UserCard
