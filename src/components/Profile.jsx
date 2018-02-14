import React from 'react';

function Profile(){
  var profileTopStyles = {
    height: '40%'
  };
  var profileDiv = {
    height: '700px',
    border: '2px solid black'
  };
  var profileImageTop = {
    backgroundColor: '#008F95',
    width: '100%',
    height: '60%',
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    color: '#FFFAFA',
    position: 'relative'
  };

  var profileImage = {
    position: 'absolute',
    top: '70%',
    left: '10%',
    width: '80px',
    height: '80px',
    backgroundColor: '#EB6EBD'
  };

  var profileLinkStyles = {
    width: '300px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    height: '38%'
  };

  var profileList = {
    listStyle: 'none',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent:'space-around',

    margin: '0px',
    padding: '0px'
  };

  var profileBottomStyles = {
    paddingLeft: '15px',
    paddingRight: '15px',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  return (

    <div style={profileDiv} >
      <div style={profileTopStyles}>

        <div style={profileImageTop}>
          <div style={profileImage}></div>
          <h3>Profile Name</h3>
        </div>

        <div style={profileLinkStyles}>
          <ul style={profileList} >
            <li>Tweets</li>
            <li>Following</li>
            <li>Followers</li>
          </ul>
        </div>
        <hr></hr>

        <div style={profileBottomStyles}>
          <p>Lorem ipsum dolor sit amet, consectetur. 🐝</p>
          <p>Lorem ipsum dolor sit amet, consectetur. 🐝</p>
          <p>Lorem ipsum dolor sit amet, consectetur. 🐝</p>
          <p>Lorem ipsum dolor sit amet, consectetur. 🐝</p>
          <p>Lorem ipsum dolor sit amet, consectetur. 🐝</p>
        </div>


      </div>
    </div>

  );
}

export default Profile;
