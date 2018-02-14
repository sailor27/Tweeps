import React from 'react';
import PropTypes from 'prop-types';


function Tweet(props){
  return (
    <div>
      <h3>{props.user} - {props.time}</h3>
      <p><em>{props.tweet}</em></p>
      <button>❤️</button>
    </div>

  );
}

//technically optional typing
Tweet.propTypes = {
  user: PropTypes.string,
  time: PropTypes.string,
  tweet: PropTypes.string,

};


export default Tweet;
