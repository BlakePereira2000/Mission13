import React from 'react';

function Podcast() {
  // this code creates a component that shows a page and a podcast link
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Podcast</h1>
      <div style={{ textAlign: 'center' }}>
        <a href="https://baconsale.com">Here is a link to my Podcasts!!</a>
      </div>
      <br></br>
      <h2 style={{ textAlign: 'center' }}>
        this is just me playing with bootstrap
      </h2>

      <div className="container">
        <h1 className="text-center">Hello, World!</h1>
        <button className="btn btn-primary">Click Me</button>
      </div>
    </>
  );
}
export default Podcast;
