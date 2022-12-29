import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { dataContext } from '../../context/FetchContext';
import feedbackModule from "./feedback.module.css"
import CardPrincipal from '../cardPrincipal/CardPrincipal';
import { useNavigate } from 'react-router-dom';
import Comment from '../comment/Comment';

const FeedbackDetail = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    let {
      datas
  } = useContext(dataContext);
  let data = datas.productRequests.find(el => el.id === Number(id));
  return (
    <section className={feedbackModule.section}>
      <div className={feedbackModule.divLink}>
        <button onClick={() => navigate(-1)} className={feedbackModule.back}>Go back</button>
        <Link to="" className={feedbackModule.editLink}>Edit feedback</Link>
      </div>
      <CardPrincipal data={data} />
      <div className={feedbackModule.divComentarios}>
        <p className={feedbackModule.comentarios}> {data.comments?.length} Comments</p>
        {
          data.comments?.map((el, index) => 
            <Comment key={el.id} comentario={el} index={index} cantComent={data.comments?.length} />
          )
        }
      </div>
    </section>
  )
}

export default FeedbackDetail