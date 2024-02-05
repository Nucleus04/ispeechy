import React from 'react';
import { createRoot } from 'react-dom/client';
import { Meteor } from 'meteor/meteor';
import App from '../imports/startup/client/App';

Meteor.startup(() => {
  const container = document.getElementById('react-target');
  const root = createRoot(container);

  document.documentElement.setAttribute('data-wf-page', '6576e72a9598c75de9f9bce7');
  document.documentElement.setAttribute('data-wf-site', '6576e72a9598c75de9f9bce9');

  root.render(<App />);
});
