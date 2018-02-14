import React from 'react';
import PropTypes from 'prop-types';


function TweepButton(props){
  return (
    <button onClick={props.onTweepButtonPress}>Tweep!</button>
  );
}



TweepButton.propTypes = {
  onTweepButtonPress: PropTypes.func
};


export default TweepButton;
