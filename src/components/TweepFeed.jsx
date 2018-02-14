import React from 'react';
import Tweet from './Tweet';
import TweepControl from './TweepControl';


class TweepFeed extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTweepList: []
    };
    this.handleNewTweep = this.handleNewTweep.bind(this);
  }

  handleNewTweep(newTweep){
    var newMasterTweepList = this.state.masterTweepList.slice();
    newMasterTweepList.push(newTweep);
    this.setState({masterTweepList: newMasterTweepList});
  }
  render() {
    return (
      <div>
        <TweepControl onNewTweep={this.handleNewTweep} />
        <div>
          <hr/>
          {this.state.masterTweepList.map((tweet, index) =>
            <Tweet user={tweet.user}
              time={tweet.time}
              tweet={tweet.tweet}
              key={index}/>
          )}
        </div>
      </div>
    );
  }
}

export default TweepFeed;
