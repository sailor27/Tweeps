import React from 'react';
import Profile from './Profile';
import TweepFeed from './TweepFeed';
import Recommend from './Recommend';

var homeStyle = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row'
};

function Home() {
  return (
    <div style={homeStyle}>

      <Profile/>
      <TweepFeed/>
      <Recommend/>
    </div>
  );

}

export default Home;
