import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info)
  if (!info) return;
  const { snippet, statistics } = info;
  if (!snippet) return;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 my-4 w-72 shadow-lg overflow-hidden h-80">
      <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
