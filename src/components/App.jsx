import React from 'react';
import Header from './Header';
import Home from './Home';
function App() {

  var wholeThingStyles = {
    backgroundColor: '#FFFAFA',
    margin: '0',
    height: '100vh',
    width: '100vw',
    fontFamily: 'sans-serif'
  };


  return (
    <div style={wholeThingStyles}>
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
