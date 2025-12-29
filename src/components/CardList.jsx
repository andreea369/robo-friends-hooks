import React from 'react'
import Card from './Card'

const CardList= (props)=>{
    return (
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 px-10">
            {
                props.robots.map((user)=>{
                    return (
                        <Card 
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            email={user.email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;
