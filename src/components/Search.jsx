import React from 'react';

function Search(){
  var navInputsStyles = {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '500px',
  };

  var navInputBox = {
    border: '2px solid black',
    borderRadius: '15px',
    height: '3em',
    width: '40%',
    color: '#EB6EBD',
    marginRight: '10px',
    fontSize: '0.75em'
  };

  var navInputButton = {
    border: '2px solid black',
    borderRadius: '15px',
    height: '3em',
    width: '20%',
    color: '#EB6EBD',
    fontSize: '0.75em',
    fontWeight: 'bold'
  };
  return (
    <div style={navInputsStyles}>
      <input style={navInputBox} placeholder="Search"></input>
      <button style={navInputButton}>Search</button>
    </div>

  );
}

export default Search;
