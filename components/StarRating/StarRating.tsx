import React from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa';

interface StarRatingProps {
    rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
    const totalStars = 5;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
        <div className="star-rating flex">
            {[...Array(totalStars)].map((_, index) => {
                if (index < fullStars) {
                    return <>
                        <FaStar key={index} color="#FFD700" size={20} className='hidden md:flex' />
                        <FaStar key={index} color="#FFD700" size={15} className='flex md:hidden' />
                    </>
                } else if (index === fullStars && hasHalfStar) {
                    return (
                        <div key={index} className="relative">
                            <FaRegStar color="#FFD700" size={20} className='hidden md:flex' />
                            <FaRegStar color="#FFD700" size={15} className='flex md:hidden' />
                            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: '50%' }}>
                                <FaStar color="#FFD700" size={20} className='hidden md:flex' />
                                <FaStar color="#FFD700" size={15} className='flex md:hidden' />
                            </div>
                        </div>
                    );
                } else {
                    return <>
                        <FaRegStar key={index} color="#FFD700" size={20} className='hidden md:flex' />
                        <FaRegStar key={index} color="#FFD700" size={15} className='flex md:hidden' />
                    </>
                }
            })}
            <span className="ml-2 text-sm">{rating.toFixed(1)}</span>
        </div>
    );
};

export default StarRating
