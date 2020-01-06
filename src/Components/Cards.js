import React from 'react';


const Card = ({id, name, email}) => {
  return (
    <section className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <h2>{name}</h2>
      <img alt="zdjęcie robota" src={`https://robohash.org/${id}?200x200.png`} />
      <p>{email}</p>
    </section>
  );
}

export default Card;
