import React from 'react';
import styled from 'styled-components';

const PrivacyContainer = styled.section`
  padding: 20px;

  h2 {
    color: #003E74;
  }
`;

const Privacy = () => (
  <PrivacyContainer>
    <h2>Privacy Policy</h2>
    <p>Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.</p>
    <h3>Information We Collect</h3>
    <p>We collect information that you provide directly to us, such as when you create an account, update your profile, use the interactive features of our services, participate in a survey, contest### `Privacy.js` (continued)
```jsx
    <h3>Information We Collect</h3>
    <p>We collect information that you provide directly to us, such as when you create an account, update your profile, use the interactive features of our services, participate in a survey, contest, promotion, sweepstakes, activity or event, make a purchase, request customer support, or otherwise communicate with us.</p>
    <h3>How We Use Information</h3>
    <p>We use the information we collect to provide, maintain, and improve our services, such as to administer your account, process transactions, send you related information, including purchase confirmations and invoices, provide customer service, respond to your comments, questions, and requests, and send you technical notices, updates, security alerts, and support and administrative messages.</p>
    <h3>Sharing of Information</h3>
    <p>We do not share your personal information with third parties without your consent, except to comply with the law, protect our rights, or provide you with requested services. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</p>
    <h3>Security</h3>
    <p>We take reasonable measures to help protect your personal information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.</p>
    <h3>Changes to This Policy</h3>
    <p>We may update this privacy policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice (such as adding a statement to our homepage or sending you a notification).</p>
    <h3>Contact Us</h3>
    <p>If you have any questions about this privacy policy, please contact us at <a href="mailto:zzm22@ic.ac.uk">zzm22@ic.ac.uk</a>.</p>
  </PrivacyContainer>
);

export default Privacy;
