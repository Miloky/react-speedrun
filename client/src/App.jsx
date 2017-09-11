import React from 'react';
import {
  HashRouter,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import FaCheckSquare from 'react-icons/lib/fa/check-square';
import {
  Home,
  BookTrading, FileMeta, ImageSearch, NightLife, PinterestClone,
  RequestHeader, StockMarket, TimeStamp, UrlShortener, Voting,
  BarChart, DataMap, ForceGraph, HeatMap, LeaderBoard,
  Life, MarkDown, Recipes, Roguelike, ScatterPlot,
  Calculator, Pomodoro, Quote, Simon, Tribute,
  Twitch, Weather, Wiki, TicTacToe,
} from './components';

const App = () => (
  <HashRouter>
    <main className="container">
      <section className="row">
        <div className="col-xs-12 col-sm-4  sidebar">
          <div className="sidebar__logo">
            <h2><Link to="/">React Speedrun</Link></h2>
          </div>
          <div className="sidebar__nav">

            <h3>Frontend</h3>
            <ul>
              <li><Link to="/frontend/calculator">Calculator</Link> - <FaCheckSquare /></li>
              <li><Link to="/frontend/pomodoro">Pomodoro</Link> - <FaCheckSquare /></li>
              <li><Link to="/frontend/quote">Quote</Link> - <FaCheckSquare /></li>
              <li><Link to="/frontend/simon">Simon</Link></li>
              <li><Link to="/frontend/tribute">Tribute</Link></li>
              <li><Link to="/frontend/twitch">Twitch</Link></li>
              <li><Link to="/frontend/weather">Weather</Link></li>
              <li><Link to="/frontend/wiki">Wikipedia Viewer</Link> - <FaCheckSquare /></li>
              <li><Link to="/frontend/tictactoe">TicTacToe</Link></li>
            </ul>
            <h3>Data Visualization</h3>
            <ul>
              <li><Link to="/datavis/barchart">BarChart</Link></li>
              <li><Link to="/datavis/datamap">DataMap</Link></li>
              <li><Link to="/datavis/forcegraph">ForceGraph</Link></li>
              <li><Link to="/datavis/heatmap">HeatMap</Link></li>
              <li><Link to="/datavis/leaderboard">LeaderBoard</Link></li>
              <li><Link to="/datavis/life">Life</Link></li>
              <li><Link to="/datavis/markdown">MarkDown</Link></li>
              <li><Link to="/datavis/recipes">Recipes</Link></li>
              <li><Link to="/datavis/roguelike">Roguelike</Link></li>
              <li><Link to="/datavis/scatterplot">ScatterPlot</Link></li>
            </ul>
            <h3>Backend</h3>
            <ul>
              <li><Link to="/backend/booktrading">BookTrading</Link></li>
              <li><Link to="/backend/filemeta">FileMeta</Link></li>
              <li><Link to="/backend/imagesearch">ImageSearch</Link></li>
              <li><Link to="/backend/nightlife">NightLife</Link></li>
              <li><Link to="/backend/pinterestclone">PinterestClone</Link></li>
              <li><Link to="/backend/requestheader">RequestHeader</Link></li>
              <li><Link to="/backend/stockmarket">StockMarket</Link></li>
              <li><Link to="/backend/timestamp">TimeStamp</Link></li>
              <li><Link to="/backend/urlshrtener">UrlShortener</Link></li>
              <li><Link to="/backend/voting">Voting</Link></li>
            </ul>
          </div>

        </div>
        <div className="col-xs-12 col-sm-8 content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/backend/booktrading" component={BookTrading} />
            <Route exact path="/backend/filemeta" component={FileMeta} from />
            <Route exact path="/backend/imagesearch" component={ImageSearch} />
            <Route exact path="/backend/nightlife" component={NightLife} />
            <Route exact path="/backend/pinterestclone" component={PinterestClone} />
            <Route exact path="/backend/requestheader" component={RequestHeader} />
            <Route exact path="/backend/stockmarket" component={StockMarket} />
            <Route exact path="/backend/timestamp" component={TimeStamp} />
            <Route exact path="/backend/urlshrtener" component={UrlShortener} />
            <Route exact path="/backend/voting" component={Voting} />
            <Route exact path="/datavis/barchart" component={BarChart} />
            <Route exact path="/datavis/datamap" component={DataMap} />
            <Route exact path="/datavis/forcegraph" component={ForceGraph} />
            <Route exact path="/datavis/heatmap" component={HeatMap} />
            <Route exact path="/datavis/leaderboard" component={LeaderBoard} />
            <Route exact path="/datavis/life" component={Life} />
            <Route exact path="/datavis/markdown" component={MarkDown} />
            <Route exact path="/datavis/recipes" component={Recipes} />
            <Route exact path="/datavis/roguelike" component={Roguelike} />
            <Route exact path="/datavis/scatterplot" component={ScatterPlot} />
            <Route exact path="/frontend/calculator" component={Calculator} />
            <Route exact path="/frontend/pomodoro" component={Pomodoro} />
            <Route exact path="/frontend/quote" component={Quote} />
            <Route exact path="/frontend/simon" component={Simon} />
            <Route exact path="/frontend/tribute" component={Tribute} />
            <Route exact path="/frontend/twitch" component={Twitch} />
            <Route exact path="/frontend/weather" component={Weather} />
            <Route exact path="/frontend/wiki" component={Wiki} />
            <Route exact path="/frontend/tictactoe" component={TicTacToe} />

          </Switch>
        </div>
      </section>
    </main>
  </HashRouter>
);

export default App;
