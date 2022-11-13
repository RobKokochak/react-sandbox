import React from 'react';

function HeadSubhead({ heading, subheading }) {
    return (
      <div>
        <h1>{ heading }</h1>
        <h3>{ subheading }</h3>
      </div>
    )
}

function App() {
    const heading = 'weeeeee';
    const subhead = 'Bingbong';

    return (
        <HeadSubhead heading={ heading } subheading={ subhead }/>
    )
}

export default App;