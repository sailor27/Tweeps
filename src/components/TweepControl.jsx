
import React from 'react';
import PropTypes from 'prop-types';
import TweepButton from './TweepButton';
import TweepForm from './TweepForm';
class TweepControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweepFormVisibleOnPage: false
    };
    this.handleTweepButtonPress = this.handleTweepButtonPress.bind(this);
  }

  handleTweepButtonPress() {

    this.setState({tweepFormVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.tweepFormVisibleOnPage){
      currentlyVisibleContent = <TweepForm onNewTweep={this.props.onNewTweep}/>;
    } else {
      currentlyVisibleContent = <TweepButton onTweepButtonPress={this.handleTweepButtonPress}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }

}

TweepControl.propTypes = {
  onTweepButtonPress: PropTypes.func,
  onNewTweep: PropTypes.func
};

export default TweepControl;
