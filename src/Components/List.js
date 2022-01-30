import React from 'react';

function List ({ people }) {
    return ( 
        <>
            {
            people.map((person) => {
                const { id, name, age, image } = person;
                return (
                    <article key={id} className='person'>
                        <img className='img-fluid float-start' src={image} alt={name} />
                        <div>
                            <h3>{name}</h3>
                            <p>{age} years</p>
                        </div>
                    </article>
                );
            })
            } 
        </>
      
     );
}

export default List;