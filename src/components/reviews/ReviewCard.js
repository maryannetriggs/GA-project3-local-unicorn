import React from 'react'
import { IoIosStar } from 'react-icons/io'

const ReviewCard = ({ experienceName, text, score, traveller }) => (
  <div className="card">
    <div className="card-header">
      <div className="card-title h5">REVIEW</div>
      <div className="card-subtitle text-gray">{experienceName}</div>
    </div>
    <div className="card-body">{text}</div>
    <div className="card-footer">
      <div><IoIosStar/>{score}</div>
      <div>{traveller}</div>
    </div>
  </div>
)

export default ReviewCard
