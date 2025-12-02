import React from 'react';

const Card= (props) =>{
    return (
        <div className='card-color rounded cursor-pointer text-center hover:from-gray-600  hover:to-white hover:shadow-lg hover:scale-105 transform transition duration-500 ease-in-out'>
            <img className= 'object-cover img_card' src={`https://robohash.org/${props.id}?200x200`} alt='robo'></img>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;
