import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }
  // using by if-else statement when user is log then show logOut button other wise logIn button shows
  /*  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button>Logout</button>
    }
    return <button>Login</button>
  }
  In div container call {this.renderAuthButton()}


   by using Element Variables
const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn === true) {
      authButton = <button>Logout</button>
    } else {
      authButton = <button>Login</button>
    }

    In div container call {authButton}


    by using ternary operating
    {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
    
    
    last one logical && relational
    {isLoggedIn && <button>Logout</button>}
    {!isLoggedIn && <button>Login</button>}
    */

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome />
        {isLoggedIn && <button>Logout</button>}
        {!isLoggedIn && <button>Login</button>}
      </div>
    )
  }
}

export default App
