import React, { useContext, useState } from 'react'
import { dataContext } from '../context/FetchContext';

const useFormPostComment = (id, idEl) => {
    const initialComment = {
        id:Date.now(),
        content:"",
        user: {
            image: "/image-zena.jpg",
            name: "Zena Kelley",
            username: "velvetround"
        },
    }
    const [comment, setComment] = useState(initialComment);

    let {
        updateData
    } = useContext(dataContext);

    const handleChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        //agregar comentario
        if(comment.content.length > 4 && !idEl)  {
            let newArray = JSON.parse(localStorage.getItem("data"));
            let datas = newArray.productRequests.find(el => el.id === Number(id));
            datas.comments.push(comment);
            localStorage.setItem("data", JSON.stringify(newArray));
            updateData();
            setComment(initialComment)
        }

        //agregar respuesta
        if(comment.content.length > 4 && idEl)  {
            let newArray = JSON.parse(localStorage.getItem("data"));
            let datas = newArray.productRequests.find(el => el.id === Number(id));
            let elemento = datas.comments.find(el => el.id === idEl);
            comment.replyingTo = elemento.user.username
            if(!elemento.replies){
                elemento.replies = [];
                elemento.replies.push(comment);
            } else {
                elemento.replies.push(comment);
            }
            localStorage.setItem("data", JSON.stringify(newArray));
            updateData();
            setComment(initialComment)
        }
    }

  return {
    handleChange,
    comment,
    handleSubmit
  }
}

export default useFormPostComment