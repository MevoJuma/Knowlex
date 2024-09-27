import React from 'react';
import './Home.css'; // Import the CSS file for styling

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Knowledge Exchange!</h1>
        <p>A platform to share and gain knowledge.</p>
        <button className="cta-button">Get Started</button>
      </section>

      {/* Search Bar */}
      <section className="search-bar">
        <input type="text" placeholder="Search for knowledge, questions, or topics..." />
        <button>Search</button>
      </section>

      {/* Featured Content */}
      <section className="featured-content">
        <h2>Featured Content</h2>
        <div className="content-grid">
          <div className="content-item">
            <h3>Popular Topic 1</h3>
            <p>Short description of the topic.</p>
          </div>
          <div className="content-item">
            <h3>Popular Topic 2</h3>
            <p>Short description of the topic.</p>
          </div>
          <div className="content-item">
            <h3>Latest Article 1</h3>
            <p>Short description of the article.</p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <h2>Browse by Category</h2>
        <div className="category-grid">
          <div className="category-item">Technology</div>
          <div className="category-item">Science</div>
          <div className="category-item">Business</div>
          <div className="category-item">Arts</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-grid">
          <div className="step-item">
            <h3>1. Ask a Question</h3>
            <p>Post a question to the community.</p>
          </div>
          <div className="step-item">
            <h3>2. Share Knowledge</h3>
            <p>Contribute your expertise.</p>
          </div>
          <div className="step-item">
            <h3>3. Collaborate</h3>
            <p>Engage in discussions and collaborate with others.</p>
          </div>
        </div>
      </section>

      {/* Join the Community */}
      <section className="join-community">
        <h2>Join the Knowledge Exchange Community</h2>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
}

export default Home;
