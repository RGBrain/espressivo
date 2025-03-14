import React from 'react'
import Image from 'next/image'

// mainImage = as

const TopEvent = ({concertData}) => {
  const imagePath = '/' + concertData.artist_entity_img_filename; 
  
  return (
    <div className="w-full bg-white h-80"> 
      <Image
      src= {imagePath}
      width={500}
      height={500}
      alt="Picture of the author"
    />
    <div>{concertData.artist_entity_name}</div>
    </div>
  );
}

export default TopEvent;
