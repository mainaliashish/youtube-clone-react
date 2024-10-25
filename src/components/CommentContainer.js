import React, { useEffect } from "react";
import { COMMENT_API } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addComments } from "../store/commentSlice";
import CommentCard from "./CommentCard";

function CommentContainer() {
    const dispatch = useDispatch();
    const comments = useSelector(store => store.comment.comments);
    console.log(comments[0]);
    useEffect(() => {
      getComments();
    }, []);
    const getComments = async () => {
      const data = await fetch(COMMENT_API);
      const comments = await data.json();
      dispatch(addComments(comments.items.slice(1,)));
    };
    if (!comments) return;
  return (
    <div>
        <h2 className="font-bold text-2xl">Comments:</h2>
        {comments.map(comment => <CommentCard key={comment.id} info={comment}/> )}
    </div>
  )
}

export default CommentContainer