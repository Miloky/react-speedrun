import React from 'react';

const Home = () => (
  <section>
    <header className="content__heading">
      <h1>Speedrun Home</h1>
    </header>
    <section>
      <h2>Finished list:</h2>
      <ul>
        <li>Built out main skeleton of frontend</li>
        <li>Built out main skeleton of backend</li>
        <li>have build script to serve full stack for dev</li>
        <li>deploy in place triggered off push to github</li>
        <li>projects with checkmark in sidebar complete</li>
      </ul>
    </section>
    <section>
      <h2>Todo list:</h2>
      <ul>
        <li>Clean up the sccs and make it more modular.
          There&quot;s some repeated sccs amongst the various modules.</li>
        <li>Doublecheck calculator, may have missed some edge cases.</li>
        <li>Beef up the production webpack.</li>
      </ul>
    </section>
  </section>

);

export default Home;
