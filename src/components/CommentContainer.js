import React, { useEffect } from 'react';
import { COMMENT_API } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addComments } from '../store/commentSlice';
import CommentCard from './CommentCard';

const commentsData = [
  {
    name: 'Ashish Mainali',
    text: 'An LRU (Least Recently Used) Cache is a data structure that stores a limited number of items, with the goal of efficiently managing memory.',
    replies: [
      {
        name: 'Hari',
        text: 'Consectetur do eu proident aute cupidatat.',
        replies: [
          {
            name: 'Hari',
            text: 'Consectetur do eu proident aute cupidatat.',
            replies: [
              {
                name: 'Hari',
                text: 'Consectetur do eu proident aute cupidatat.',
                replies: [
                  {
                    name: 'Hari',
                    text: 'Consectetur do eu proident aute cupidatat.'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'Ashish Mainali',
    text: 'An LRU (Least Recently Used) Cache is a data structure that stores a limited number of items, with the goal of efficiently managing memory.',
    replies: [
      {
        name: 'Hari',
        text: 'Consectetur do eu proident aute cupidatat.'
      }
    ]
  },
  {
    name: 'Ashish Mainali',
    text: 'An LRU (Least Recently Used) Cache is a data structure that stores a limited number of items, with the goal of efficiently managing memory.',
    replies: [
      {
        name: 'Hari',
        text: 'Consectetur do eu proident aute cupidatat.'
      }
    ]
  },
  {
    name: 'Ashish Mainali',
    text: 'An LRU (Least Recently Used) Cache is a data structure that stores a limited number of items, with the goal of efficiently managing memory.',
    replies: [
      {
        name: 'Hari',
        text: 'Consectetur do eu proident aute cupidatat.'
      }
    ]
  },
  {
    name: 'Ashish Mainali',
    text: 'An LRU (Least Recently Used) Cache is a data structure that stores a limited number of items, with the goal of efficiently managing memory.',
    replies: [
      {
        name: 'Hari',
        text: 'Consectetur do eu proident aute cupidatat.'
      }
    ]
  },
  {
    name: 'Ashish Mainali',
    text: 'An LRU (Least Recently Used) Cache is a data structure that stores a limited number of items, with the goal of efficiently managing memory.',
    replies: [
      {
        name: 'Hari',
        text: 'Consectetur do eu proident aute cupidatat.'
      }
    ]
  }
];

const Comment = ({data}) => {
    const {name, text, replies} = data;
    return (
        <div className='flex shadow-lg bg-gray-200 rounded-lg mt-4'>
            <img 
                alt="commenter" 
                className='w-12 h-12' 
                src='https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg' />
            <div className='px-3 w-full'>
                <p className='font-bold'>{name}</p>
                <p>{text}</p>
            </div>
        </div>
    )
};

const CommentsList = ({comments}) => {
    // console.log(comments)
    if (!comments) return;
    return comments.map((comment) => (
    <div className=''>
        <Comment key={Math.random(1,100)} data={comment}/>
        <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies} key={Math.random(1,100)}/>
        </div>
    </div>
    ))
};

const CommentContainer = () => {
    // console.log(commentsData)
  const dispatch = useDispatch();
  const comments = useSelector((store) => store.comment.comments);
  // console.log(comments[0]);
  useEffect(() => {
    getComments();
  }, []);
  const getComments = async () => {
    const data = await fetch(COMMENT_API);
    const comments = await data.json();
    dispatch(addComments(comments.items.slice(1)));
  };
  if (!comments) return;
  return (
    <div className='w-1/2'>
      <h2 className="font-bold text-2xl">Comments:</h2>
      <CommentsList comments={commentsData} />
      {/* <Comment data={commentsData[0]} /> */}
      {/* {comments.map((comment) => (
        <CommentCard key={comment.id} info={comment} />
      ))} */}
    </div>
  );
};

export default CommentContainer;
