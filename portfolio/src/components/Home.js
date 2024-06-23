import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Header = styled.header`
  text-align: center;
  margin-bottom: 40px;

  .profile-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-top: 20px;

    img {
      border-radius: 50%;
      width: 150px;
      height: auto;
      object-fit: cover;
      border: 5px solid #003E74;
    }
  }
`;

const Home = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <Header>
      <h1>Welcome to My Portfolio</h1>
      <div className="profile-container">
        <img src="/assets/images/curl_headshot.jpeg" alt="Headshot" />
        <img src="/assets/images/Imperial_logo.png" alt="University Logo" />
      </div>
    </Header>
    <main>
      <section id="about">
        <h2>About Me</h2>
        <p>I am a second-year student at Imperial College London with a keen interest in data science, technology, and finance.</p>
      </section>
      <section id="education">
        <h2>Education</h2>
        <ul>
          <li><strong>Imperial College London</strong> - Physics MSci, Predicted First-Class Honors</li>
          <li><strong>Bishopshalt School - A Levels</strong> - Mathematics, Physics, Computer Science (All A*)</li>
          <li><strong>Rosedale College - GCSE</strong> - Achieved 13 GCSEs with grades 9 to 8</li>
        </ul>
      </section>
    </main>
  </motion.div>
);

export default Home;
