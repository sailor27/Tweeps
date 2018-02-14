import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';


function TweepForm(props){
  let _user = null;
  let _time = null;
  let _tweet = null;


  function handleTweepFormSubmission(event) {
    event.preventDefault();
    props.onNewTweep({user: _user.value, time: _time.value, tweet: _tweet.value, id: v4()});
    _user.value = '';
    _time.value = '';
    _tweet.value = '';

  }

  return(
    <div>
      <form onSubmit={handleTweepFormSubmission}>
        <input
          type='text'
          id='user'
          placeholder='your username'
          ref={(input) => {_user = input;}}/>
        <input
          type='text'
          id='time'
          placeholder='the current time'
          ref={(input) => {_time = input;}}/>
        <textarea
          id='tweet'
          placeholder='180 characters or fewer please.'
          ref={(textarea) => {_tweet = textarea;}}/>
        <button type='submit'>Tweep!!!!</button>
      </form>

    </div>
  );

}

TweepForm.propTypes = {
  onTweepButtonPress: PropTypes.func,
  onNewTweep: PropTypes.func
};


export default TweepForm;
