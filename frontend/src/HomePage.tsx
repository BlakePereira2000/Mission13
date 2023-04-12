import react from 'react';

// renders a home page
function HomePage() {
  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <h1> This Is Joels Movie Collection Website</h1>
      <img
        src={require('./JoelHiltonHeadshot.jpg')}
        alt="bill"
        style={{ width: '100%' }}
      />
    </div>
  );
}
export default HomePage;
