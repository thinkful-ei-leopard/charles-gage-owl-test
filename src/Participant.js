import React from 'react';
import './Participant.css';

export default function Participant(props) {
    let status;
    if (props.onStage === true) {
        status = 'on stage';
    } else if (props.onStage === false && props.inSession === true) {
        status = 'in session';
    } else {
        status = 'left session';
    }
  return (
    <div className="session-participant">
        <img src={props.avatar} alt={props.name} className="user-avatar" />
        <div className="participant-info">
            <h6 className="participant-name">{props.name}</h6>
            <div className="participant-status participant-status__green">
               {status}
            </div>
        </div>
    </div>
  );
}