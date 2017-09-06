import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home/home';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import './app.css';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import IconButton from 'material-ui/IconButton';
import NavigationBack from 'material-ui/svg-icons/navigation/arrow-back';
import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import Timestamp from '../backend/timestamp/timestamp';
import Requestheader from '../backend/requestheader/requestheader';
import UrlShortener from '../backend/urlshortener/urlshortener';
import ImageSearch from '../backend/imagesearch/imagesearch';
import FileMetadata from '../backend/filemetadata/filemetadata';
import Voting from '../backend/voting/voting';
import Nightlife from '../backend/nightlife/nightlife';
import StockMarket from '../backend/stockmarket/stockmarket';
import BookTrading from '../backend/booktrading/booktrading';
import PinterestClone from '../backend/pinterestclone/pinterestclone';
import BarChart from '../datavis/barchart/barchart';
import DataMap from '../datavis/datamap/datamap';
import ForceGraph from '../datavis/forcegraph/forcegraph';
import HeatMap from '../datavis/heatmap/heatmap';
import Leaderboard from '../datavis/leaderboard/leaderboard';
import Life from '../datavis/life/life';
import Markdown from '../datavis/markdown/markdown';
import Recipes from '../datavis/recipes/recipes';
import Roguelike from '../datavis/roguelike/roguelike';
import Scatterplot from '../datavis/scatterplot/scatterplot';
import Calculator from '../frontend/calculator/calculator';
import Pomodoro from '../frontend/pomodoro/pomodoro';
import Quote from '../frontend/quote/quote';
import Simon from '../frontend/simon/simon';
import Tictactoe from '../frontend/tictactoe/tictactoe';
import Tribute from '../frontend/tribute/tribute';
import Twitch from '../frontend/twitch/twitch';
import Weather from '../frontend/weather/weather';
import Wiki from '../frontend/wiki/wiki';

class App extends Component {
  state = { apiText: '', open: false };

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div className="app">
        
        <div className="app__header">
          <AppBar
            
            title="React Speedrun"
            onLeftIconButtonTouchTap={()=>{this.handleToggle()}}
          />
        </div>

        <div className="app__sidebar">
          <Drawer open={this.state.open}>

            <List>
            <ListItem>
              <IconButton onClick={() =>this.handleToggle()} >
                <NavigationBack />
              </IconButton>          
            </ListItem>
            <Subheader>Frontend Projects</Subheader>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/">Home</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/frontend/tribute-page">Tribute Page</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/frontend/random-quote-machine">Random Quote Machine</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/frontend/local-weather">Local Weather</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/frontend/wikipedia-viewer">Wikipedia Viewer</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/frontend/twitch-tv">Twitch.tv API</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/frontend/javascript-calulator">JavaScript Calculator</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/frontend/pomodoro-clock">Pomodoro Clock</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/frontend/tic-tac-toe">Tic Tac Toe</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/frontend/simon-game">Simon Game</Link></ListItem>

            <Subheader>Data Visualzation Projects</Subheader>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/datavis/markdown-previewer">Markdown Previewer</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/datavis/camper-leaderboard">Camper Leaderboard</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/datavis/recipe-box">Recipe Box</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/datavis/game-of-life">Game of Life</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/datavis/roguelike">Roguelike Dungeon Crawler</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/datavis/bar-chart">Bar Chart</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/datavis/scatterplot-graph">Scatterplot Graph</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/datavis/heat-map">Heat Map</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/datavis/force-directed">Force Directed Graph</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/datavis/map-data">Map Data Across the Globe</Link></ListItem>
            
            <Subheader>Backend Projects</Subheader>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/backend/timesstamp-microservice">Timestamp Microservice</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/backend/request-microservice">Request Header Microservice</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/backend/url-microservice">URL Shortener Microservice</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/backend/image-search">Image Search Abstraction Layer</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/backend/file-metadata">File Metadata Microservice</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/backend/voting-app">Voting App</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/backend/nightlife-app">Nightlife Coordination</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/backend/stock-market">Stock Market</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/backend/book-club">Book Trading Club</Link></ListItem>

            <ListItem><Link onClick={() =>this.handleToggle()} className="app__sidebar__link" to="/backend/pinterest-clone">Pinterest Clone</Link></ListItem>
           

              </List>

          </Drawer>
        </div>

        <div className="app__content">
          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/frontend/tribute-page" component={Tribute} />
            <Route exact path="/frontend/random-quote-machine" component={Quote} />
            <Route exact path="/frontend/local-weather" component={Weather} />
            <Route exact path="/frontend/wikipedia-viewer" component={Wiki} />
            <Route exact path="/frontend/twitch-tv" component={Twitch} />
            <Route exact path="/frontend/javascript-calulator" component={Calculator} />
            <Route exact path="/frontend/pomodoro-clock" component={Pomodoro} />
            <Route exact path="/frontend/tic-tac-toe" component={Tictactoe} />
            <Route exact path="/frontend/simon-game" component={Simon} />
            <Route exact path="/datavis/markdown-previewer" component={Markdown} />
            <Route exact path="/datavis/camper-leaderboard" component={Leaderboard} />
            <Route exact path="/datavis/recipe-box" component={Recipes} />
            <Route exact path="/datavis/game-of-life" component={Life} />
            <Route exact path="/datavis/roguelike" component={Roguelike} />
            <Route exact path="/datavis/bar-chart" component={BarChart} />
            <Route exact path="/datavis/scatterplot-graph" component={Scatterplot} />
            <Route exact path="/datavis/heat-map" component={HeatMap} />
            <Route exact path="/datavis/force-directed" component={ForceGraph} />
            <Route exact path="/datavis/map-data" component={DataMap} />
            <Route exact path="/backend/timesstamp-microservice" component={Timestamp} />
            <Route exact path="/backend/request-microservice" component={Requestheader} />
            <Route exact path="/backend/url-microservice" component={UrlShortener} />
            <Route exact path="/backend/image-search" component={ImageSearch} />
            <Route exact path="/backend/file-metadata" component={FileMetadata} />
            <Route exact path="/backend/voting-app" component={Voting} />
            <Route exact path="/backend/nightlife-app" component={Nightlife} />
            <Route exact path="/backend/stock-market" component={StockMarket} />
            <Route exact path="/backend/book-club" component={BookTrading} />
            <Route exact path="/backend/pinterest-clone" component={PinterestClone} />
          </main>
        </div>
        <div className="app__footer">
       
          <Toolbar>
            <ToolbarGroup>
              <ToolbarTitle text="P1xt &copy; 2017" />  
            </ToolbarGroup>
            <ToolbarGroup>
              <IconButton target="_blank" href="https://github.com/P1xt/react-speedrun" iconClassName="material-icon-custom-github" />
            </ToolbarGroup>
          </Toolbar> 
        </div>

      </div>
    );
  }
}

export default App;