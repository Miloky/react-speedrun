import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import './app.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import Divider from 'material-ui/Divider';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import { withStyles } from 'material-ui/styles';
import FontIcon from 'material-ui/FontIcon';
class App extends Component {
  state = { apiText: '', open: false };

  handleToggle = () => this.setState({open: !this.state.open});
  async componentDidMount() {
    const response = await fetch('/api');
    const apiText = await response.json();

    this.setState({ apiText: apiText });
  }
  render() {
    return (
      <div className="App">
        <AppBar
          
          title="Title"
          onLeftIconButtonTouchTap={()=>{this.handleToggle()}}
        />
        <div className="Sidebar">
          <Drawer open={this.state.open}>
            <MenuItem>
              <IconButton onClick={() =>this.handleToggle()} >
                <NavigationBack />
              </IconButton>          
            </MenuItem>
            <Divider />
            <MenuItem><Link to="/">Home</Link></MenuItem>
            <Divider />
          </Drawer>
        </div>

        <div className="mainContent">
          <main>
            <Route exact path="/" component={Home} />
          </main>
        </div>
        <div className="Footer">
       
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="P1xt &copy; 2017" />  
            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton target="_blank" href="https://github.com/P1xt/react-speedrun" iconClassName="muidocs-icon-custom-github" />
            </ToolbarGroup>
          </Toolbar> 
        </div>

      </div>
    );
  }
}

export default App;