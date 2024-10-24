import React, { useEffect } from 'react'
import { YOUTUBE_API } from '../utils/constants'

const VideoContainerComponent = () => {
  useEffect(()=>{
    getVideos()
  }, [])
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API)
    const finalData = await data.json()
    console.log(finalData?.items)
  }
  return (
    <div>VideoContainerComponent</div>
  )
}

export default VideoContainerComponent