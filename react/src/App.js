import React, { Component } from "react"
import facade from "./apiFacade";
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ListItem from './components/ListItem';
import redirect from './components/redirect';

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" }
  }
  login = (evt) => {
    evt.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }

  onChange = (evt) => {
    this.setState({ [evt.target.id]: evt.target.value })
  }
  render() {
    return (

      <div>
        <BrowserRouter>
          <ul class="header">
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/ListItem">API test</NavLink>
            </li>
            <li>
              <a href="/CA3/documentation/"> Documentation </a>
            </li>
            <li>
              <form onSubmit={this.login} onChange={this.onChange} >
                <input placeholder="User Name" id="username" />
                <input placeholder="Password" id="password" />
                <button>Login</button>
              </form>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/ListItem" component={ListItem} />
            <Route component={Error} />


          </Switch>
        </BrowserRouter>

      </div>
    )
  }
}

class LoggedIn extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
  }
  componentDidMount() {
  }
  render () {
    return (
      <div>
        <BrowserRouter >
          <ul class="header">
            <li>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <p class="header">logged in as: {this.props.username}, role: {this.props.role}</p>
            </li>
          </ul>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />

          </Switch>
        </BrowserRouter>
      </div>

    )
  }
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false, username: "", role: "" }
  }
  logout = () => {
    facade.logout();
    this.setState({ loggedIn: false });
  }


  login = async (username, pass) => {
   const res = await facade.login(username, pass);
      this.setState({ loggedIn: true, username: username, role: res.role });
  }
  
  render() {
    return (

      <div>
        {!this.state.loggedIn ? (<LogIn login={this.login} />) :
          (<div>
            <LoggedIn username={this.state.username} role={this.state.role} />
            <button onClick={this.logout}>Logout</button>
          </div>)}



      </div>
    )
  }
}
export default App;
