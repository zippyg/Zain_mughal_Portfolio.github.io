import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 20px;

  h2 {
    color: #003E74;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      margin-bottom: 10px;
    }

    a {
      color: #003E74;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Contact = () => (
  <ContactContainer>
    <h2>Contact Me</h2>
    <p>You can reach me through the following contact details:</p>
    <ul>
      <li><strong>Institutional Email:</strong> <a href="mailto:zzm22@ic.ac.uk">zzm22@ic.ac.uk</a></li>
      <li><strong>Personal Email:</strong> <a href="mailto:zainmughal77@outlook.com">zainmughal77@outlook.com</a></li>
      <li><strong>Phone:</strong> +44 07810101334</li>
      <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/zain-mughal-b770041a4/" target="_blank">linkedin.com/in/zain-mughal-b770041a4</a></li>
    </ul>
  </ContactContainer>
);

export default Contact;
