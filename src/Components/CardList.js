import React from 'react';
import Card from './Cards'

const CardList = ({robots}) => {

    return (
        <main className='tc'>
            {robots.map((user, index) => 
                <Card 
                    key={robots[index].id} 
                    id={robots[index].id} 
                    name={robots[index].name} 
                    email={robots[index].email} 
                /> 
            )}
        </main>
    );
}

export default CardList;