import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { dataContext } from '../../context/FetchContext';
import feedbackModule from "./feedback.module.css"
import CardPrincipal from '../cardPrincipal/CardPrincipal';
import { useNavigate } from 'react-router-dom';
import Comment from '../comment/Comment';
import AddComment from '../addComment/AddComment';

const FeedbackDetail = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    let {
      data
    } = useContext(dataContext);
  let datas = data.productRequests.find(el => el.id === Number(id));
  return (
    <section className={feedbackModule.section}>
      <div className={feedbackModule.divLink}>
        <button onClick={() => navigate(-1)} className={feedbackModule.back}>Go back</button>
        <Link to="" className={feedbackModule.editLink}>Edit feedback</Link>
      </div>
      <CardPrincipal data={datas} />
      <div className={feedbackModule.divComentarios}>
        <p className={feedbackModule.comentarios}> {datas.comments?.length} Comments</p>
        {
          datas.comments?.map((el, index) => 
            <Comment key={el.id} comentario={el} index={index} cantComent={datas.comments?.length}  />
          )
        }
      </div>
      <AddComment id={id} />
    </section>
  )
}

export default FeedbackDetail