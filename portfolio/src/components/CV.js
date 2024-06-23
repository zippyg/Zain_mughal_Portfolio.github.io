import React from 'react';
import styled from 'styled-components';

const CVContainer = styled.section`
  padding: 20px;

  h2 {
    color: #003E74;
  }

  .pdf-embed {
    width: 100%;
    height: 100vh;
    border: none;
  }
`;

const CV = () => (
  <CVContainer>
    <h2>Curriculum Vitae</h2>
    <embed src="/Zain_Mughal_NP_CV_MSci.pdf" className="pdf-embed" />
  </CVContainer>
);

export default CV;
