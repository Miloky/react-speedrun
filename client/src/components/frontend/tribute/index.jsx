import React from 'react';
import angularLogo from '../../../assets/images/angular.png';
import './style.scss';

const Tribute = () => (
  <section>
    <header className="content__heading">
      <h1>Tribute Page</h1>
    </header>
    <section className="tribute">
      <img src={angularLogo} alt="Angular logo" />
      <h2>Angular</h2>
      <p>I may be doing this speedrun in React, but I&quot;d be remiss if I didnt
        give at least one shoutout to my frontend framwork of choice - Angular.
      </p>
      <p>You can read more about it here: </p>
      <p><a href="https://angular.io/" target="_blank" rel="noopener noreferrer">angular.io</a></p>
    </section>
  </section>

);

export default Tribute;
