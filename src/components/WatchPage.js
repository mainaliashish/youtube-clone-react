import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

function WatchPage() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  console.log(searchParams.get('v'));
  const id = searchParams.get('v');
  useEffect(() => {
    dispatch(closeMenu());
  }, [])

  return (
    <div>
        <div className='px-5 mt-3'>
            <iframe 
                className='w-1/2'
                width="1000" 
                height="600" 
                src={"https://www.youtube.com/embed/"+id} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>

            </iframe>
        </div>
        <div className='px-5 mt-3'>
            <CommentContainer />
        </div>
    </div>
  )
}

export default WatchPage