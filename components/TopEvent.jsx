import React from 'react'
import Image from 'next/image'
import TopEventCard from './TopEventCard';


const TopEvent = ({concertData}) => {
  const imagePath = '/' + concertData.artist_entity_img_filename;
  
  return (
    <TopEventCard imagePath={imagePath} />

  );
}

export default TopEvent;
