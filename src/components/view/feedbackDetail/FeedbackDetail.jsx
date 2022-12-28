import React from 'react'
import { useParams } from 'react-router-dom';

const FeedbackDetail = () => {
    const params = useParams();
  return (
    <div>{params.title}</div>
  )
}

export default FeedbackDetail