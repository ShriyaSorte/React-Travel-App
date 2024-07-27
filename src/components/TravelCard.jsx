import React, { useState } from 'react';

const TravelCard = ({ id, title, description, price, image, onDelete }) => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(true);
  };

  const handleReadLess = () => {
    setShowMore(false);
  };

  return (
    <div className="travel-card">
      <h2>{title}</h2>
      <img src={image} alt={title} style={{ width: '100%', height: '200px' }} />
      <div className="travel-description">
        {showMore ? description : `${description.substring(0, 100)}...`}
        {showMore ? (
          <span onClick={handleReadLess} style={{ color: 'blue', cursor: 'pointer' }}> Read less</span>
        ) : (
          <span onClick={handleReadMore} style={{ color: 'blue', cursor: 'pointer' }}> Read more</span>
        )}
      </div>
      <div className='travel-price'>
        <p>Price: {price}</p>
      </div>
        <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default TravelCard;
