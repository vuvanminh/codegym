import React, { Component } from 'react';

import Students from './components/Students';
// import Home from './components/Home';

class App extends Component{
	render () {
	  return (  
		<div className="App">
			<Students />
		</div>
	  );
	}
  //TH1
  /*
  const dataStd = [
	  {
		id: 1,
		name: "Nguyen Van A",
		age: 91,
		addr: "DALAT"
	  }
  ];
	
  return (
    <div className="App">
	  <body>
		<InfoComponent data={dataStd} />
	  </body>
    </div>
  );
  */
  
  //TH2
  /*
  constructor(props) {
	  super(props);
	  this.state = {
		  isLoggedIn: false
	  };
  }
  
  handleLogin = () => {
	  this.setState({ isLoggedIn : true })
  }
  
  handleLogOut = () => {
	  this.setState({ isLoggedIn : false })
  }
  
  render () {
	  const {isLoggedIn} = this.state;
	  if(isLoggedIn){
		  return (<Home onLogOut={this.handleLogOut} />);
	  }else{
		  return (
			  <div>
				<b>Please login</b>
				<button onClick={this.handleLogin}>Login</button>
			  </div>
		  )
	  }
  }
  */
}

export default App;
