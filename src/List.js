import React from 'react';
import Participant from './Participant';
import './List.css';

export default function List(props){
    console.log(props);
  return (
    <section className='side-bar'>
      <div className='participant-list'>
        {props.props.sort((a, b) => {
            return b.onStage - a.onStage;
        })
        .sort((a, b) => {
            return b.inSession - a.inSession;
        })
        .map(person =>
          <Participant
            key={person.id}
            name={person.name}
            avatar={person.avatar}
            inSession={person.inSession}
            onStage={person.onStage}
          />
        )}
      </div>
    </section>
  );
}