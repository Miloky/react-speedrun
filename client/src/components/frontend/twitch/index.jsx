import React, { Component } from 'react';
import './style.scss';

class Twitch extends Component {
  constructor() {
    super();

    this.state = {
      twitchAPI: 'https://wind-bow.glitch.me/twitch-api/streams/',
      streamersList: ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas'],
      streamers: [],
    };

    this.getStreamers();
  }

  getStreamers = async () => {
    await this.state.streamersList.map(
      async streamer => this.getOneStreamer(streamer)
    );
  }

  getOneStreamer = async (streamer) => {
    const response = await fetch(this.state.twitchAPI + streamer);
    const streamData = await response.json();
    const streamers = this.state.streamers;
    streamData.streamer = streamer;
    streamers.push(streamData);
    this.setState({ streamers });
  }

  render() {
    return (
      <section>
        <header className="content__heading">
          <h1>Twitch.tv Streamers</h1>
        </header>
        <section className="twitchStreamers">
          <table>
            <tbody>
              {this.state.streamers &&
                Object.entries(this.state.streamers)
                  .map(stream => (
                    <tr key={stream[0]}>
                      <td>
                        {stream[1].stream &&
                          <a href={`https://www.twitch.tv/${stream[1].streamer}`} target="_blank" rel="noopener noreferrer">
                            {stream[1].streamer}
                          </a>
                        }
                        {!stream[1].stream &&
                          <span>{stream[1].streamer}</span>
                        }
                      </td>
                      <td>{stream[1].stream ? `  is currently streaming  ${stream[1].stream.game}` : ' is offline'}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </section>
      </section>
    );
  }
}


export default Twitch;
