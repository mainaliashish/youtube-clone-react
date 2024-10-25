import React, { useEffect } from 'react'
import VideoCard from './VideoCard'
import { YOUTUBE_API } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from "../store/videoSlice"
import { Link } from 'react-router-dom';

const VideoContainerComponent = () => {
  const dispatch = useDispatch()
  const videos = useSelector(store => store.video.videos)
  // console.log(videos);
  useEffect(()=>{
    getVideos()
  }, [])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const finalData = await data.json()
    dispatch(addVideos(finalData.items));
  }
  return (
    <div className='flex flex-wrap'>
      {
        videos.map(video => <Link to={`/watch?v=${video.id}`} key={video.id}><VideoCard info={video} key={video.id}/></Link> )
      }
    </div>
  )
}

export default VideoContainerComponent