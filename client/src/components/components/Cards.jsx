import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose, lang}) {
 
  let filterRepeat = cities.filter((value, index, self) =>
  index === self.findIndex((e) => (
    e.id === value.id
  )))
      
  return (
    <div className='cards'>
  
      {filterRepeat.map(c => <Card
          lang={lang}
          key={c.id}
          id={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          country={c.country}
          onClose={() => onClose(c.id)}
        /> )}
    </div>
  );
  
}
